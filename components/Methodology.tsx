import { Section } from './Section';
import { Reveal } from './Reveal';
import { IconMethodology } from './icons';

const steps = [
  { n: '01', f: 'Reconocimiento', t: 'Relevamiento', d: 'Entendemos qué sistemas necesitan comunicarse y qué información debe circular.' },
  { n: '02', f: 'Trazado de ruta', t: 'Diseño', d: 'Definimos arquitectura, endpoints, contratos de datos y mecanismos de autenticación.' },
  { n: '03', f: 'Ensamblaje', t: 'Desarrollo', d: 'Implementamos la integración.' },
  { n: '04', f: 'Pruebas de vuelo', t: 'Validación', d: 'Probamos los flujos y casos de error.' },
  { n: '05', f: 'Despegue', t: 'Implementación', d: 'Preparamos la solución para su utilización en el entorno correspondiente.' },
  { n: '06', f: 'En órbita', t: 'Continuidad', d: 'Podemos continuar con soporte, mantenimiento y evolución incremental.' },
];

export function Methodology() {
  return (
    <Section
      id="metodologia"
      index="05"
      eyebrow="Plan de vuelo"
      title="Cómo trabajamos."
      description="Seis etapas, de la primera conversación a la órbita estable."
      accent="gold"
      icon={<IconMethodology />}
    >
      <div className="relative">
        {/* Línea conectora horizontal (solo desktop) */}
        <div
          aria-hidden="true"
          className="absolute left-0 right-0 top-[38px] hidden h-px bg-gradient-to-r from-transparent via-line-700 to-transparent lg:block"
        />

        <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-6 lg:gap-4">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 80}>
              <li className="group relative">
                {/* Nodo numerado */}
                <div className="relative mb-5 flex h-[76px] items-center">
                  <div className="relative flex h-16 w-16 items-center justify-center">
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 rounded-full bg-teal-500/0 transition-all duration-300 group-hover:bg-teal-500/10 group-hover:blur-xl"
                    />
                    <span className="relative flex h-16 w-16 items-center justify-center rounded-full border border-line-700 bg-dark-800/70 font-display text-xl font-semibold text-ink-100 backdrop-blur-sm transition-all duration-300 group-hover:border-teal-500/60 group-hover:text-teal-400">
                      {s.n}
                    </span>
                  </div>
                </div>

                <p className="mb-1 font-mono text-[10px] uppercase tracking-[0.2em] text-gold-500/80">{s.f}</p>
                <h3 className="mb-2 text-base font-semibold text-ink-100 md:text-lg">{s.t}</h3>
                <p className="text-xs leading-relaxed text-ink-500 md:text-sm">{s.d}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </Section>
  );
}
