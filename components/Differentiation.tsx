import { Section } from './Section';
import { IconDifference } from './icons';

export function Differentiation() {
  return (
    <Section
      id="aetheryon"
      eyebrow="AETHERYON Systems"
      title="Un partner tecnológico independiente."
      accent="gold"
      icon={<IconDifference />}
    >
      <p className="max-w-prose text-lg leading-relaxed text-ink-300 md:text-xl">
        Capacidad técnica, analítica y autogestión independiente para resolver necesidades
        específicas de tecnología sin necesidad de incorporar una estructura completa.
      </p>
      <p className="mt-6 max-w-prose font-display text-xl font-medium text-ink-100 md:text-2xl">
        Una nave liviana y ágil, lista para acoplarse a tu operación.
      </p>
    </Section>
  );
}