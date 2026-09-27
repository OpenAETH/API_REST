import { Section } from './Section';
import { Reveal } from './Reveal';
import { IconDeliverables } from './icons';

const deliverables = [
  'código fuente',
  'API implementada',
  'endpoints definidos',
  'integración configurada',
  'estructura de datos',
  'autenticación',
  'validaciones',
  'manejo de errores',
  'documentación',
  'configuración de ambiente',
  'pruebas',
  'instrucciones de despliegue',
  'repositorio correspondiente',
  'soporte de implementación según modalidad contratada',
];

export function Deliverables() {
  return (
    <Section
      id="entregables"
      index="04"
      eyebrow="Entregables"
      title="Qué recibe el cliente."
      accent="gold"
      icon={<IconDeliverables />}
      tone="panel"
    >
      <ul className="grid gap-x-10 gap-y-1 md:grid-cols-2">
        {deliverables.map((d, i) => (
          <Reveal key={d} delay={i * 30}>
            <li className="group flex items-center gap-4 border-b border-line-900/60 py-3.5 transition-colors hover:border-aurora-500/40">
              <span
                aria-hidden="true"
                className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-line-700 transition-colors group-hover:border-aurora-500 group-hover:bg-aurora-500/10"
              >
                <svg
                  className="h-3 w-3 text-ink-700 transition-colors group-hover:text-aurora-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </span>
              <span className="text-sm text-ink-300 transition-colors group-hover:text-ink-100 md:text-base">
                {d}
              </span>
            </li>
          </Reveal>
        ))}
      </ul>

      <Reveal delay={200}>
        <div className="relative mt-10 flex items-start gap-4 overflow-hidden rounded-lg border border-aurora-500/30 bg-gradient-to-br from-void-900/60 to-void-800/60 p-5 backdrop-blur-sm md:p-6">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-10 -top-10 h-32 w-32 rounded-full blur-3xl"
            style={{ background: 'radial-gradient(circle, rgba(34,211,164,0.2), transparent 70%)' }}
          />
          <span className="relative flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md border border-aurora-500/40 bg-aurora-500/10 text-aurora-500">
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16v-4M12 8h.01" />
            </svg>
          </span>
          <p className="relative max-w-2xl text-sm leading-relaxed text-ink-300 md:text-base">
            El alcance definitivo se establece según la complejidad y cantidad de integraciones
            requeridas.
          </p>
        </div>
      </Reveal>
    </Section>
  );
}
