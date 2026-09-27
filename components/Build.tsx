import { Section } from './Section';
import { Reveal } from './Reveal';
import { IconBuild } from './icons';

const items = [
  { title: 'REST APIs', body: 'Endpoints para consulta, creación, actualización y eliminación de información.', code: 'GET · POST · PUT · DELETE' },
  { title: 'Integraciones', body: 'Conexión entre sistemas propios y servicios externos.', code: 'system ⇄ system' },
  { title: 'API Gateway / Integration Layer', body: 'Capa intermedia para organizar comunicaciones entre componentes.', code: 'gateway → services' },
  { title: 'Data Transformation', body: 'Conversión y normalización de estructuras de datos.', code: 'json ⇄ xml ⇄ csv' },
  { title: 'Authentication', body: 'Autenticación y autorización según requerimientos del proyecto.', code: 'jwt · oauth2 · api-key' },
  { title: 'Webhooks', body: 'Comunicación basada en eventos cuando un sistema notifica cambios a otro.', code: 'event → callback' },
  { title: 'Documentation', body: 'Documentación técnica de endpoints y contratos de integración.', code: 'openapi · swagger' },
];

export function Build() {
  return (
    <Section
      id="construir"
      index="04"
      eyebrow="Alcance técnico"
      title="Qué podemos construir."
      accent="violet"
      icon={<IconBuild />}
    >
      <div className="grid gap-x-12 gap-y-10 md:grid-cols-2">
        {items.map((i, idx) => (
          <Reveal key={i.title} delay={idx * 60}>
            <div className="group relative pl-6">
              <span
                aria-hidden="true"
                className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-violet-500/60 via-violet-500/20 to-transparent"
              />
              <span
                aria-hidden="true"
                className="absolute -left-[3px] top-2 h-1.5 w-1.5 rounded-full bg-violet-500 opacity-0 transition-opacity group-hover:opacity-100"
              />
              <div className="mb-2 flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-semibold text-ink-100 md:text-xl">{i.title}</h3>
                <code className="font-mono text-[10px] uppercase tracking-[0.15em] text-violet-400/80">
                  {i.code}
                </code>
              </div>
              <p className="text-sm leading-relaxed text-ink-300 md:text-base">{i.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
