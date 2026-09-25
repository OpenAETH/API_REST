import { Section } from './Section';
import { Reveal } from './Reveal';
import { PriceBlock } from './PriceBlock';
import { IconInvestment } from './icons';

export function Investment() {
  return (
    <Section
      id="inversion"
      index="08"
      eyebrow="Inversión"
      title="Precio de referencia."
      accent="signal"
      icon={<IconInvestment />}
      tone="panel"
    >
      <Reveal>
        <PriceBlock />
      </Reveal>
      <Reveal delay={100}>
        <p className="mt-6 max-w-2xl text-ink-300">
          Proyectos de mayor complejidad pueden ampliarse según alcance, cantidad de integraciones y
          requerimientos técnicos.
        </p>
      </Reveal>
    </Section>
  );
}