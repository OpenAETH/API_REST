import { Section } from './Section';
import { Reveal } from './Reveal';
import { IconSolution } from './icons';

const capabilities = [
  'diseñar endpoints',
  'desarrollar APIs REST',
  'integrar APIs de terceros',
  'conectar aplicaciones',
  'conectar bases de datos',
  'implementar autenticación',
  'validar y transformar datos',
  'manejar errores',
  'documentar endpoints',
  'preparar ambientes de desarrollo y producción',
  'incorporar logging y observabilidad básica',
  'integrar la API dentro de una arquitectura existente',
];

export function Solution() {
  return (
    <Section
      id="solucion"
      index="02"
      eyebrow="Solución"
      title="Una capa de integración entre tus sistemas."
      description="AETHERYON puede:"
      accent="aurora"
      icon={<IconSolution />}
      tone="panel"
    >
      <div className="grid gap-3 md:grid-cols-2">
        {capabilities.map((c, i) => (
          <Reveal key={c} delay={i * 40}>
            <div className="group flex items-center gap-4 rounded-lg border border-line-900/80 bg-void-900/40 px-5 py-4 backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-aurora-500/40 hover:bg-void-700/50">
              <span
                aria-hidden="true"
                className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md border border-line-700 bg-void-700 transition-colors group-hover:border-aurora-500/40 group-hover:bg-aurora-500/10"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-aurora-500 transition-transform group-hover:scale-150" />
              </span>
              <span className="text-sm text-ink-300 transition-colors group-hover:text-ink-100 md:text-base">
                {c}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}