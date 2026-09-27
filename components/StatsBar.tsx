import { Reveal } from './Reveal';

const stats = [
  { value: '12', label: 'capacidades técnicas cubiertas' },
  { value: '14', label: 'factores que definen el alcance' },
  { value: '6', label: 'etapas de metodología' },
  { value: '10', label: 'preguntas ya resueltas' },
];

export function StatsBar() {
  return (
    <div className="relative border-b border-line-900 bg-dark-800/40">
      <div className="mx-auto grid max-w-container grid-cols-2 gap-8 px-6 py-10 md:grid-cols-4 md:py-12">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 80}>
            <div className="text-center md:text-left">
              <div className="font-display text-4xl font-semibold tracking-tight text-ink-100 md:text-5xl">
                <span className="bg-gradient-to-r from-teal-400 to-gold-400 bg-clip-text text-transparent">
                  {s.value}
                </span>
              </div>
              <p className="mt-2 text-xs text-ink-500 md:text-[13px]">
                {s.label}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
