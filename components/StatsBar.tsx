import { Reveal } from './Reveal';
import { IconBuild, IconMethodology, IconQuestion, IconScope } from './icons';

const stats = [
  { value: '12', label: 'capacidades técnicas cubiertas', Icon: IconBuild },
  { value: '14', label: 'factores que definen el alcance', Icon: IconScope },
  { value: '6', label: 'etapas de metodología', Icon: IconMethodology },
  { value: '10', label: 'preguntas ya resueltas', Icon: IconQuestion },
];

export function StatsBar() {
  return (
    <div className="relative border-b border-line-900 bg-dark-800/40">
      <div className="mx-auto max-w-container px-6 pt-8">
        <p className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-ink-700">
          <span className="h-1.5 w-1.5 animate-beacon rounded-full bg-teal-500" />
          Telemetría de la misión
          <span className="h-px flex-1 bg-gradient-to-r from-line-700 to-transparent" />
        </p>
      </div>
      <div className="mx-auto grid max-w-container grid-cols-2 gap-8 px-6 py-10 md:grid-cols-4 md:py-12">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 80}>
            <div className="group text-center md:text-left">
              <div className="mb-3 flex justify-center md:justify-start">
                <s.Icon className="h-5 w-5 stroke-teal-500/70 transition-colors group-hover:stroke-teal-400" />
              </div>
              <div className="font-display text-4xl font-semibold tracking-tight text-ink-100 md:text-5xl">
                <span className="bg-gradient-to-r from-teal-400 to-gold-400 bg-clip-text text-transparent">
                  {s.value}
                </span>
              </div>
              <p className="mt-2 text-xs text-ink-500 md:text-[13px]">{s.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
