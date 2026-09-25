import { Section } from './Section';
import { Reveal } from './Reveal';
import { IconRequirements } from './icons';

const items = [
  'descripción de los sistemas involucrados',
  'objetivo de la integración',
  'documentación existente',
  'documentación de APIs externas, si corresponde',
  'ejemplos de datos',
  'acceso técnico cuando sea necesario',
  'restricciones de seguridad',
  'ambiente disponible',
  'responsables técnicos o funcionales',
];

export function Requirements() {
  return (
    <Section
      id="requisitos"
      index="06"
      eyebrow="Para comenzar"
      title="Información necesaria."
      accent="aurora"
      icon={<IconRequirements />}
      tone="panel"
    >
      <div className="flex flex-wrap gap-3">
        {items.map((it, i) => (
          <Reveal key={it} delay={i * 40}>
            <span className="group inline-flex items-center gap-3 rounded-full border border-line-700 bg-void-900/60 px-4 py-2 text-sm text-ink-300 transition-all duration-200 hover:-translate-y-0.5 hover:border-aurora-500/50 hover:bg-void-700/60 hover:text-ink-100">
              <span
                aria-hidden="true"
                className="h-1 w-4 rounded-full bg-line-500 transition-colors group-hover:bg-aurora-500"
              />
              {it}
            </span>
          </Reveal>
        ))}
      </div>

      <Reveal delay={200}>
        <div className="relative mt-12 border-l-2 border-aurora-500/40 pl-6">
          <p className="max-w-2xl font-display text-xl font-medium leading-snug text-ink-100 md:text-2xl">
            No necesitás tener toda la arquitectura resuelta antes de contactarnos.{' '}
            <span className="text-aurora-500">Podemos ayudarte a definirla.</span>
          </p>
        </div>
      </Reveal>
    </Section>
  );
}