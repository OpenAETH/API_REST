import { Section } from './Section';
import { Reveal } from './Reveal';
import { IconDeliverables } from './icons';

const deliverables = [
  'código fuente',
  'API implementada',
  'endpoints definidos',
  'integración configurada',
  'estructura de datos',
  'autenticación',
  'validaciones',
  'manejo de errores',
  'documentación',
  'configuración de ambiente',
  'pruebas',
  'instrucciones de despliegue',
  'repositorio correspondiente',
  'soporte de implementación según modalidad contratada',
];

const requirements = [
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

export function Handoff() {
  return (
    <Section
      id="entregables"
      index="06"
      eyebrow="Entregables & requisitos"
      title="Qué te llevás y qué necesitamos de vos."
      icon={<IconDeliverables />}
      accent="gold"
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <Reveal>
          <div className="h-full rounded-2xl border border-line-900 bg-dark-800/40 p-6 md:p-8">
            <h3 className="mb-5 flex items-center gap-2.5 text-sm font-semibold text-gold-500">
              <span className="h-1.5 w-1.5 rounded-full bg-gold-500" />
              Lo que recibís
            </h3>
            <ul className="grid gap-2">
              {deliverables.map((d) => (
                <li key={d} className="flex items-center gap-3 border-b border-line-900/60 py-2 text-sm text-ink-300 md:text-base">
                  <span aria-hidden="true" className="h-1 w-4 flex-shrink-0 bg-gold-500" />
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="h-full rounded-2xl border border-line-900 bg-dark-800/40 p-6 md:p-8">
            <h3 className="mb-5 flex items-center gap-2.5 text-sm font-semibold text-teal-400">
              <span className="h-1.5 w-1.5 rounded-full bg-teal-500" />
              Lo que necesitamos de vos
            </h3>
            <ul className="grid gap-2">
              {requirements.map((r) => (
                <li key={r} className="flex items-center gap-3 border-b border-line-900/60 py-2 text-sm text-ink-300 md:text-base">
                  <span aria-hidden="true" className="h-1 w-4 flex-shrink-0 bg-teal-500" />
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>

      <p className="mt-8 max-w-2xl text-ink-100">
        No necesitás tener toda la arquitectura resuelta antes de contactarnos. Podemos ayudarte a
        definirla.
      </p>
    </Section>
  );
}
