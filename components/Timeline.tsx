import { Section } from './Section';
import { Reveal } from './Reveal';
import { IconTimeline } from './icons';

const inputs = ['sistemas', 'integraciones', 'endpoints', 'reglas', 'dependencias', 'disponibilidad de accesos'];

export function Timeline() {
  return (
    <Section
      id="tiempo"
      index="09"
      eyebrow="Tiempo"
      title="Tiempo estimado: según alcance del proyecto."
      accent="aurora"
      icon={<IconTimeline />}
    >
      <p className="mb-8 max-w-2xl text-ink-300">El plazo se define después de conocer:</p>

      <div className="relative max-w-3xl">
        {/* Línea vertical */}
        <span
          aria-hidden="true"
          className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-aurora-500/40 via-line-700 to-transparent"
        />
        <ul className="space-y-4">
          {inputs.map((it, i) => (
            <Reveal key={it} delay={i * 50}>
              <li className="group flex items-center gap-5">
                <span
                  aria-hidden="true"
                  className="relative z-10 h-4 w-4 flex-shrink-0 rounded-full border border-line-700 bg-void-900 transition-all duration-200 group-hover:border-aurora-500 group-hover:bg-aurora-500/20"
                >
                  <span className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-ink-700 transition-colors group-hover:bg-aurora-500" />
                </span>
                <span className="text-sm text-ink-300 transition-colors group-hover:text-ink-100 md:text-base">
                  {it}
                </span>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>

      <Reveal delay={200}>
        <p className="mt-10 max-w-2xl border-l-2 border-aurora-500/40 pl-5 text-ink-300">
          Si el proyecto tiene un alcance suficientemente definido, el plazo queda establecido en la
          propuesta/orden de trabajo.
        </p>
      </Reveal>
    </Section>
  );
}