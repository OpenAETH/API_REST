import { Section } from './Section';
import { Reveal } from './Reveal';
import { IconConditions } from './icons';

const exclusions = [
  'reconstrucción completa de sistemas existentes',
  'desarrollo de aplicaciones completas',
  'migraciones masivas de datos',
  'infraestructura cloud',
  'licencias de terceros',
  'servicios externos pagos',
  'mantenimiento indefinido',
  'soporte 24/7',
  'integraciones no contempladas en el alcance inicial',
];

export function Exclusions() {
  return (
    <Section
      id="exclusiones"
      index="10"
      eyebrow="Condiciones"
      title="Para evitar sorpresas."
      description="El precio base no implica automáticamente:"
      accent="coral"
      icon={<IconConditions />}
      tone="panel"
    >
      <ul className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
        {exclusions.map((e, i) => (
          <Reveal key={e} delay={i * 40}>
            <li className="group relative flex items-start gap-4 overflow-hidden rounded-lg border border-line-900/80 bg-void-900/40 px-5 py-4 backdrop-blur-sm transition-all duration-200 hover:border-line-700 hover:bg-void-800/60">
              {/* Borde izquierdo de acento sutil */}
              <span
                aria-hidden="true"
                className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-plasma-500/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
              />
              <span
                aria-hidden="true"
                className="mt-1.5 h-2 w-2 flex-shrink-0 rotate-45 border border-ink-700 transition-colors group-hover:border-plasma-400"
              />
              <span className="text-sm leading-snug text-ink-300 transition-colors group-hover:text-ink-100 md:text-base">
                {e}
              </span>
            </li>
          </Reveal>
        ))}
      </ul>

      <Reveal delay={200}>
        <div className="mt-10 flex items-start gap-4 rounded-lg border border-line-700 bg-void-900/80 p-5">
          <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md border border-plasma-500/40 bg-plasma-500/10 text-plasma-400">
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14M5 12h14" />
            </svg>
          </span>
          <p className="text-sm text-ink-300 md:text-base">
            Cualquier requerimiento adicional puede{' '}
            <span className="text-ink-100">presupuestarse como extensión</span>.
          </p>
        </div>
      </Reveal>
    </Section>
  );
}