#!/usr/bin/env python3
"""
rewrite.py — aplica edition.patch sobre una copia local del repo
OpenAETH/API_REST sin depender de `git apply`.

Se escribió a mano porque el repo original mezcla finales de línea
CRLF/LF, lo que hace que `git apply` rechace el patch por líneas de
contexto que no calzan byte a byte. Este script compara líneas
ignorando el \\r final, así que funciona sin importar cómo estén
guardados los archivos en tu copia local.

Uso:
    cd API_REST          # raíz del repo, donde está package.json
    python rewrite.py edition.patch

No requiere dependencias además de la librería estándar.
"""
import os
import re
import sys


def parse_patch(text):
    """Parsea un diff unificado estilo `git diff` en una lista de entradas
    por archivo: {old_path, new_path, is_new, is_delete, hunks}."""
    lines = text.split('\n')
    n = len(lines)
    files = []
    i = 0

    while i < n:
        line = lines[i]
        if not line.startswith('diff --git '):
            i += 1
            continue

        m = re.match(r'^diff --git a/(.*) b/(.*)$', line)
        old_path = m.group(1) if m else None
        new_path = m.group(2) if m else None
        i += 1

        is_new = False
        is_delete = False
        old_marker = None
        new_marker = None

        # Cabecera del bloque (index/mode/---/+++) hasta el primer hunk
        # o el próximo archivo.
        while i < n and not lines[i].startswith('@@') and not lines[i].startswith('diff --git '):
            if lines[i].startswith('new file mode'):
                is_new = True
            elif lines[i].startswith('deleted file mode'):
                is_delete = True
            elif lines[i].startswith('--- '):
                old_marker = lines[i][4:]
            elif lines[i].startswith('+++ '):
                new_marker = lines[i][4:]
            i += 1

        if old_marker == '/dev/null':
            is_new = True
        if new_marker == '/dev/null':
            is_delete = True

        hunks = []
        while i < n and lines[i].startswith('@@'):
            i += 1  # saltar la línea "@@ -a,b +c,d @@"
            hunk_lines = []
            while i < n and lines[i] and lines[i][0] in (' ', '-', '+', '\\'):
                hunk_lines.append(lines[i])
                i += 1
            hunks.append(hunk_lines)

        files.append({
            'old_path': old_path,
            'new_path': new_path,
            'is_new': is_new,
            'is_delete': is_delete,
            'hunks': hunks,
        })

    return files


def read_file_lines(path):
    """Lee un archivo de texto y devuelve sus líneas sin terminador,
    quitando un \\r final si lo hubiera (para poder comparar parejo
    contra un patch generado en Linux con LF puro)."""
    with open(path, 'rb') as f:
        raw = f.read()
    text = raw.decode('utf-8')
    parts = text.split('\n')
    if parts and parts[-1] == '':
        parts = parts[:-1]
    lines = [p[:-1] if p.endswith('\r') else p for p in parts]
    return lines


def find_subsequence(haystack, needle, start=0):
    if not needle:
        return start
    span = len(needle)
    last_start = len(haystack) - span
    for i in range(start, last_start + 1):
        if haystack[i:i + span] == needle:
            return i
    return None


def apply_hunks_to_lines(lines, hunks, rel_path):
    result = list(lines)
    search_from = 0
    for hunk in hunks:
        old_block, new_block = [], []
        for hl in hunk:
            tag, content = hl[0], hl[1:]
            if tag == ' ':
                old_block.append(content)
                new_block.append(content)
            elif tag == '-':
                old_block.append(content)
            elif tag == '+':
                new_block.append(content)
            # '\\' ("\ No newline at end of file") se ignora

        idx = find_subsequence(result, old_block, search_from)
        if idx is None:
            idx = find_subsequence(result, old_block, 0)
        if idx is None:
            preview = '\n    '.join(old_block[:5]) or '(bloque vacío)'
            raise RuntimeError(
                f"no pude ubicar un bloque del patch en {rel_path}.\n"
                f"  Primeras líneas esperadas:\n    {preview}\n"
                f"  ¿El archivo local coincide con el commit original del repo?"
            )
        result[idx:idx + len(old_block)] = new_block
        search_from = idx + len(new_block)
    return result


def write_lines(path, lines):
    directory = os.path.dirname(path)
    if directory:
        os.makedirs(directory, exist_ok=True)
    content = '\n'.join(lines) + '\n'
    with open(path, 'w', encoding='utf-8', newline='\n') as f:
        f.write(content)


def apply_entry(entry, root):
    rel_path = (entry['new_path'] or entry['old_path']).strip()
    abs_path = os.path.join(root, *rel_path.split('/'))

    if entry['is_delete']:
        if os.path.exists(abs_path):
            os.remove(abs_path)
            print(f"  eliminado   {rel_path}")
        else:
            print(f"  ya no está  {rel_path} (nada que borrar)")
        return

    if entry['is_new']:
        new_lines = [hl[1:] for hunk in entry['hunks'] for hl in hunk if hl[0] == '+']
        write_lines(abs_path, new_lines)
        print(f"  creado      {rel_path}")
        return

    if not os.path.exists(abs_path):
        raise RuntimeError(f"no se encontró {rel_path} para modificarlo")

    lines = read_file_lines(abs_path)
    new_lines = apply_hunks_to_lines(lines, entry['hunks'], rel_path)
    write_lines(abs_path, new_lines)
    print(f"  modificado  {rel_path}")


def main():
    if len(sys.argv) != 2:
        print("Uso: python rewrite.py <archivo.patch>")
        sys.exit(1)

    patch_path = sys.argv[1]
    if not os.path.isfile(patch_path):
        print(f"No encuentro el archivo de patch: {patch_path}")
        sys.exit(1)

    with open(patch_path, 'r', encoding='utf-8', newline='') as f:
        text = f.read()
    text = text.replace('\r\n', '\n')  # por si el .patch se tocó en Windows

    entries = parse_patch(text)
    if not entries:
        print("El patch no tiene cambios reconocibles. ¿Es el archivo correcto?")
        sys.exit(1)

    root = os.getcwd()
    print(f"Aplicando {len(entries)} cambios de archivo en: {root}\n")

    errors = []
    for entry in entries:
        try:
            apply_entry(entry, root)
        except Exception as exc:
            label = entry.get('new_path') or entry.get('old_path')
            errors.append(label)
            print(f"  ERROR       {label}: {exc}")

    print()
    if errors:
        print(f"Terminó con {len(errors)} error(es) en: {', '.join(errors)}")
        print("El resto de los archivos sí se aplicaron.")
        sys.exit(1)

    print("Listo — todos los cambios se aplicaron correctamente.")
    print("Ahora podés correr: npm install && npm run build")


if __name__ == '__main__':
    main()
