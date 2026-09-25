import { Section } from './Section';
import { Card } from './Card';
import { Reveal } from './Reveal';

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
      eyebrow="Casos de uso"
      title="Dónde aplica una integración."
      tone="panel"
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {cases.map((c, i) => (
          <Reveal key={c.title} delay={i * 80}>
            <Card accent="signal">
              <h3 className="mb-2 font-mono text-sm uppercase tracking-wider text-signal-400">
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
