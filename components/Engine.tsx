import { Section } from './Section';
import { Reveal } from './Reveal';
import { Card } from './Card';
import { IconBolt, IconConduit, IconDeliverables, IconEngine, IconH2 } from './icons';
import { landingConfig } from '@/config/landing';

const pillars = [
  {
    title: 'Combustión limpia',
    body: 'Código legible y documentado, con validaciones y errores bien manejados: más fácil de mantener.',
    Icon: IconH2,
    accent: 'teal' as const,
  },
  {
    title: 'Empuje constante',
    body: 'Avanzamos por etapas sobre un contrato claro: cada entrega mueve la integración un paso adelante.',
    Icon: IconBolt,
    accent: 'gold' as const,
  },
  {
    title: 'Acople modular',
    body: 'Cada integración tiene una interfaz definida: se puede sumar o reemplazar un proveedor sin tocar el resto.',
    Icon: IconConduit,
    accent: 'violet' as const,
  },
  {
    title: 'Llegada completa',
    body: 'Código fuente, documentación, pruebas e instrucciones de despliegue: llegás a destino con todo para operar.',
    Icon: IconDeliverables,
    accent: 'teal' as const,
  },
];

const stages = ['Tu necesidad', landingConfig.engine.name, 'Integración en marcha'];

export function Engine() {
  return (
    <Section
      id="abrahadabra"
      eyebrow="Sala de máquinas"
      title={`${landingConfig.engine.name}: el motor detrás de cada integración.`}
      description="Hidrógeno como metáfora de una forma de trabajar: energía limpia, empuje constante y nada que estorbe cuando la nave llega a destino."
      accent="violet"
      icon={<IconEngine />}
      tone="panel"
    >
      <Reveal>
        <ol className="mb-14 flex flex-col items-stretch gap-3 md:flex-row md:items-center md:gap-0">
          {stages.map((st, i) => (
            <li key={st} className="flex flex-1 flex-col items-stretch md:flex-row md:items-center">
              <span
                className={`rounded-full border px-5 py-3 text-center font-mono text-xs uppercase tracking-[0.2em] ${
                  i === 1
                    ? 'border-gold-500/50 bg-gold-500/10 text-gold-500 shadow-[0_0_30px_-8px_rgba(255,209,102,0.6)]'
                    : 'border-line-700 bg-dark-800/60 text-ink-300'
                }`}
              >
                {st}
              </span>
              {i < stages.length - 1 && (
                <>
                  <span
                    aria-hidden="true"
                    className="mx-auto h-6 w-px bg-gradient-to-b from-teal-500/60 to-transparent md:hidden"
                  />
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 100 4"
                    preserveAspectRatio="none"
                    className="mx-2 hidden h-1 flex-1 md:block"
                  >
                    <line
                      x1="0"
                      y1="2"
                      x2="100"
                      y2="2"
                      stroke="#00E5C0"
                      strokeWidth="2"
                      className="conduit animate-flow"
                      vectorEffect="non-scaling-stroke"
                    />
                  </svg>
                </>
              )}
            </li>
          ))}
        </ol>
      </Reveal>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {pillars.map((p, i) => (
          <Reveal key={p.title} delay={i * 80}>
            <Card accent={p.accent} className="h-full">
              <p.Icon className="mb-4 h-7 w-7 stroke-current text-ink-100" />
              <h3 className="mb-2 text-lg font-semibold text-ink-100">{p.title}</h3>
              <p className="text-sm leading-relaxed text-ink-300">{p.body}</p>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
