import { landingConfig } from '@/config/landing';
import { CTAButton } from './CTAButton';
import { IconRocket } from './icons';

export function FinalCTA() {
  return (
      <section
        id="comenzar"
        className="relative isolate overflow-hidden border-b border-line-900 bg-void-900/40"
      >
      {/* Grid técnico de fondo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(91,140,255,0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(91,140,255,0.4) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 100%)',
        }}
      />

      {/* Glow central */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 blur-[120px]"
        style={{ background: 'radial-gradient(ellipse, rgba(91,140,255,0.18), transparent 60%)' }}
      />

      <div className="relative mx-auto max-w-container px-6 py-24 text-center md:py-32">
        {/* Ícono decorativo */}
        <div className="mb-8 flex justify-center">
          <div className="relative flex h-14 w-14 items-center justify-center rounded-full border border-signal-500/40 bg-signal-500/5 text-signal-400">
            <span
              aria-hidden="true"
              className="absolute inset-0 animate-pulse rounded-full bg-signal-500/20 blur-xl"
            />
            <IconRocket />
          </div>
        </div>

        <h2 className="mb-5 font-display text-[clamp(2rem,4.5vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.02em] text-ink-100">
          ¿Necesitás conectar tus sistemas?
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

          <p className="max-w-md font-mono text-[11px] uppercase tracking-[0.15em] text-ink-500">
            Revisá el alcance · Completá los datos · Avanzá mediante ClientsNDA
          </p>

          <a
            href={landingConfig.cta.finalSecondary.href}
            className="mt-2 text-sm text-ink-500 underline decoration-line-700 underline-offset-4 transition-colors hover:text-signal-400 hover:decoration-signal-500"
          >
            {landingConfig.cta.finalSecondary.label}
          </a>
        </div>

        {/* Micro-trust strip */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-700">
          <span className="flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-aurora-500" />
            Desde USD 5.000
          </span>
          <span className="flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-aurora-500" />
            Contratación directa
          </span>
          <span className="flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-aurora-500" />
            Sin reunión previa
          </span>
        </div>
      </div>
    </section>
  );
}