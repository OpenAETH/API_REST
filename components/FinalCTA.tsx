import { landingConfig } from '@/config/landing';
import { CTAButton } from './CTAButton';
import { IconShip } from './icons';

export function FinalCTA() {
  return (
    <section
      id="comenzar"
      className="relative isolate overflow-hidden border-b border-line-900 bg-dark-900/40"
    >
      {/* Grid + glows más vivos */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,229,192,0.6) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,229,192,0.6) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 100%)',
        }}
      />

      {/* Glow central grande */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[1000px] -translate-x-1/2 -translate-y-1/2 blur-[140px]"
        style={{ background: 'radial-gradient(ellipse, rgba(0,229,192,0.28), transparent 60%)' }}
      />

      {/* Glow violeta lateral */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 h-[400px] w-[400px] rounded-full blur-[100px] opacity-40"
        style={{ background: 'radial-gradient(circle, rgba(176,102,255,0.30), transparent 70%)' }}
      />

      {/* Glow dorado lateral */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 bottom-0 h-[400px] w-[400px] rounded-full blur-[100px] opacity-40"
        style={{ background: 'radial-gradient(circle, rgba(255,209,102,0.30), transparent 70%)' }}
      />

      <div className="relative mx-auto max-w-container px-6 py-24 text-center md:py-32">
        {/* Nave en plataforma de lanzamiento */}
        <div className="mb-10 flex flex-col items-center">
          <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-teal-500/60 bg-teal-500/10 text-teal-400">
            <span
              aria-hidden="true"
              className="absolute inset-0 animate-pulse rounded-full bg-teal-500/30 blur-xl"
            />
            <span
              aria-hidden="true"
              className="hatch-ring absolute -inset-2 rounded-full border border-dashed border-teal-500/40"
            />
            <IconShip className="relative h-9 w-9" />
          </div>
          <span
            aria-hidden="true"
            className="animate-flame svg-origin-top mt-1 block h-14 w-3 origin-top rounded-b-full bg-gradient-to-b from-teal-400 via-teal-500/50 to-transparent blur-[2px]"
          />
        </div>

        <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.3em] text-gold-500">
          {landingConfig.engine.name} · motor H₂ listo
        </p>

        <h2 className="mb-5 font-display text-[clamp(2rem,4.5vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.02em] text-ink-100">
          ¿Listo para <span className="text-h2-flame">encender los motores?</span>
        </h2>

        <p className="mx-auto mb-12 max-w-2xl text-lg text-ink-300 md:text-xl">
          Si el problema está claro, podemos comenzar directamente.
        </p>

        <div className="flex flex-col items-center gap-5">
          <CTAButton
            href={landingConfig.cta.primary.href}
            label={landingConfig.cta.primary.label}
            position="final"
            eventType="clientsnda_exit"
            glow
            size="lg"
          />

          <p className="max-w-md text-sm text-ink-500">
            Revisá el alcance, completá los datos del proyecto y avanzá mediante ClientsNDA.
          </p>

          <a
            href={landingConfig.cta.finalSecondary.href}
            className="mt-2 text-sm text-ink-500 underline decoration-line-700 underline-offset-4 transition-colors hover:text-teal-400 hover:decoration-teal-500"
          >
            {landingConfig.cta.finalSecondary.label}
          </a>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-ink-700">
          <span className="flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-gold-500" />
            Desde USD 5.000
          </span>
          <span className="flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-gold-500" />
            Contratación directa
          </span>
          <span className="flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-gold-500" />
            Sin reunión previa
          </span>
        </div>
      </div>
    </section>
  );
}
