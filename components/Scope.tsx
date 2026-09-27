import { Section } from './Section';
import { Reveal } from './Reveal';
import { IconScope } from './icons';

const factors = [
  'cantidad de sistemas',
  'cantidad de endpoints',
  'complejidad de las reglas de negocio',
  'cantidad de fuentes',
  'autenticación',
  'transformación de datos',
  'necesidad de sincronización',
  'webhooks',
  'requerimientos de seguridad',
  'ambientes',
  'documentación existente',
  'despliegue',
  'pruebas',
  'soporte posterior',
];

export function Scope() {
  return (
    <Section
      id="alcance"
      index="07"
      eyebrow="Alcance"
      title="¿Qué determina el alcance?"
      description="El esfuerzo depende principalmente de:"
      accent="plasma"
      icon={<IconScope />}
    >
      <div className="grid gap-x-8 gap-y-1 md:grid-cols-2 lg:grid-cols-3">
        {factors.map((f, i) => (
          <Reveal key={f} delay={i * 30}>
            <div className="group flex items-center gap-3 border-b border-line-900/60 py-3 transition-colors hover:border-plasma-500/40">
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-line-500 transition-all duration-200 group-hover:bg-plasma-500 group-hover:shadow-[0_0_8px_2px_rgba(139,92,246,0.5)]"
              />
              <span className="text-sm text-ink-300 transition-colors group-hover:text-ink-100 md:text-base">
                {f}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}