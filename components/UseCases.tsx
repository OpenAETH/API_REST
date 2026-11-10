import { Section } from './Section';
import { Card } from './Card';
import { Reveal } from './Reveal';
import { IconCases, IconConduit } from './icons';

const cases = [
  { title: 'Sistema ↔ Sistema', body: 'Integración entre aplicaciones internas.' },
  { title: 'Aplicación ↔ Base de datos', body: 'Acceso controlado a información.' },
  { title: 'Sistema interno ↔ API externa', body: 'Consumo de servicios de terceros.' },
  { title: 'Web App ↔ Backend', body: 'Comunicación entre frontend y backend.' },
  { title: 'ERP / CRM ↔ Ecosistema', body: 'Sincronización de información entre plataformas.' },
  { title: 'API ↔ Automatización', body: 'Utilizar APIs como capa para automatizar procesos.' },
];

export function UseCases() {
  return (
    <Section
      id="casos"
      index="03"
      eyebrow="Rutas de acople"
      title="Dónde aplica una integración."
      description="Seis rutas habituales por las que viaja la información entre tus sistemas."
      icon={<IconCases />}
      tone="panel"
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {cases.map((c, i) => (
          <Reveal key={c.title} delay={i * 80}>
            <Card accent="teal">
              <IconConduit className="mb-4 h-6 w-6 stroke-teal-500/80 transition-transform duration-300 group-hover:translate-x-1" />
              <h3 className="mb-2 font-mono text-sm uppercase tracking-wider text-teal-400">
                {c.title}
              </h3>
              <p className="text-ink-300">{c.body}</p>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
