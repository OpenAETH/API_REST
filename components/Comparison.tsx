import { Section } from './Section';
import { Reveal } from './Reveal';

const included = [
  'diseño e implementación de la API',
  'endpoints definidos y documentados',
  'autenticación y validaciones',
  'manejo de errores',
  'pruebas de los flujos principales',
  'código fuente y repositorio',
];

const excluded = [
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

export function Comparison() {
  return (
    <Section id="condiciones" index="10" eyebrow="Condiciones" title="Para evitar sorpresas." tone="panel">
      <div className="grid gap-6 lg:grid-cols-2">
        <Reveal>
          <div className="h-full rounded-2xl border border-aurora-500/20 bg-void-800/40 p-6 md:p-8">
            <h3 className="mb-5 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-aurora-500">
              <span className="h-1.5 w-1.5 rounded-full bg-aurora-500" />
              Incluye
            </h3>
            <ul className="grid gap-3">
              {included.map((i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-ink-300 md:text-base">
                  <span aria-hidden="true" className="mt-0.5 text-aurora-500">✓</span>
                  <span>{i}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="h-full rounded-2xl border border-line-900 bg-void-800/20 p-6 md:p-8">
            <h3 className="mb-5 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-ink-500">
              <span className="h-1.5 w-1.5 rounded-full bg-ink-700" />
              No incluye
            </h3>
            <ul className="grid gap-3">
              {excluded.map((e) => (
                <li key={e} className="flex items-start gap-3 text-sm text-ink-500 md:text-base">
                  <span aria-hidden="true" className="mt-0.5 text-ink-700">✕</span>
                  <span>{e}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>

      <p className="mt-8 max-w-2xl text-ink-100">
        Cualquier requerimiento adicional puede presupuestarse como extensión.
      </p>
    </Section>
  );
}
