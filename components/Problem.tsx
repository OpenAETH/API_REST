import { Section } from './Section';
import { Reveal } from './Reveal';
import { IconProblem } from './icons';

const problems = [
  { text: 'Tenemos dos sistemas y alguien copia información manualmente.', tag: 'Proceso manual' },
  { text: 'Nuestro CRM y nuestro sistema interno no se comunican.', tag: 'Silos' },
  { text: 'Necesitamos integrar un servicio externo.', tag: 'Integración externa' },
  { text: 'Tenemos una aplicación y necesitamos exponer sus datos.', tag: 'Exposición' },
  { text: 'Cada integración se resuelve de una manera diferente.', tag: 'Inconsistencia' },
  { text: 'Los procesos dependen de archivos, mails o cargas manuales.', tag: 'Dependencia' },
  { text: 'Queremos automatizar, pero primero necesitamos conectar los sistemas.', tag: 'Bloqueo' },
];

export function Problem() {
  return (
    <Section
      id="problema"
      index="01"
      eyebrow="Problema"
      title="¿Te está pasando alguno de estos problemas?"
      accent="coral"
      icon={<IconProblem />}
    >
      <ul className="divide-y divide-line-900 border-y border-line-900">
        {problems.map((p, i) => (
          <Reveal key={p.text} delay={i * 60}>
            <li className="group flex items-center gap-6 py-5 transition-colors hover:bg-void-800/40 md:py-6">
              <span className="w-10 flex-shrink-0 font-mono text-xs tracking-[0.2em] text-ink-700 transition-colors group-hover:text-signal-500">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="flex-1 text-base text-ink-300 transition-colors group-hover:text-ink-100 md:text-lg">
                {p.text}
              </span>
              <span className="hidden flex-shrink-0 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-700 transition-colors group-hover:text-signal-500 md:block">
                {p.tag}
              </span>
            </li>
          </Reveal>
        ))}
      </ul>

      <Reveal delay={200}>
        <div className="relative mt-12 overflow-hidden rounded-lg border border-signal-500/30 bg-gradient-to-br from-void-700/60 to-void-800/70 p-6 backdrop-blur-sm md:p-8">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full blur-3xl"
            style={{ background: 'radial-gradient(circle, rgba(91,140,255,0.2), transparent 70%)' }}
          />
          <p className="relative max-w-3xl font-display text-xl font-medium leading-snug text-ink-100 md:text-2xl">
            Cuando los sistemas no se comunican,{' '}
            <span className="text-signal-400">las personas terminan funcionando como API humanas.</span>
          </p>
        </div>
      </Reveal>
    </Section>
  );
}