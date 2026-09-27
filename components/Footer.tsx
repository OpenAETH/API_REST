const links = [
  { href: '#problema', label: 'Problema' },
  { href: '#solucion', label: 'Solución' },
  { href: '#casos', label: 'Casos de uso' },
  { href: '#alcance', label: 'Alcance' },
  { href: '#inversion', label: 'Inversión' },
  { href: '#faq', label: 'FAQ' },
];

export function Footer() {
  return (
    <footer className="border-t border-line-900 bg-dark-800">
      <div className="mx-auto max-w-container px-6 py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <span className="font-display text-lg font-semibold tracking-tight text-ink-100">
              AETHERYON Systems
            </span>
            <p className="mt-2 max-w-xs text-sm text-ink-500">
              Capacidad tecnológica independiente para conectar sistemas, datos y aplicaciones.
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-ink-500 transition-colors hover:text-teal-400"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-line-900 pt-6 text-xs text-ink-700 md:flex-row">
          <span>© {new Date().getFullYear()} AETHERYON Systems</span>
          <span>REST API / Integración</span>
        </div>
      </div>
    </footer>
  );
}
