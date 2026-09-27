import { landingConfig } from '@/config/landing';
import { CTAButton } from './CTAButton';
import { HeroOrbit } from './HeroOrbit';
import { HeroTicker } from './HeroTicker';

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-line-900">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[600px] w-[900px] -translate-x-1/2 opacity-40 blur-[100px]"
        style={{ background: 'radial-gradient(ellipse, #5b8cff 0%, transparent 60%)' }}
      />

      <div className="relative mx-auto max-w-container px-6 pb-24 pt-32 md:pb-32 md:pt-40">
        <div className="grid gap-16 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <div>
            {/* Status pill */}
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-line-700 bg-void-700/60 px-4 py-1.5 backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-aurora-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-aurora-500" />
              </span>
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-300">
                AETHERYON Systems · API / Integration
              </span>
            </div>

            <h1 className="mb-8 font-display text-[clamp(2.75rem,6vw,5rem)] font-semibold leading-[1.02] tracking-[-0.03em] text-ink-100">
              Tus sistemas no tienen que{' '}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-signal-400 via-signal-500 to-plasma-400 bg-clip-text text-transparent">
                  trabajar aislados.
                </span>
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-1 -z-10 h-3 bg-signal-glow blur-md"
                />
              </span>
            </h1>

            <p className="mb-10 max-w-xl text-[clamp(1.125rem,1.4vw,1.375rem)] leading-relaxed text-ink-300">
              Diseñamos e implementamos APIs REST para conectar aplicaciones, datos y servicios de
              forma segura, documentada y mantenible.
            </p>

            <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <CTAButton
                href={landingConfig.cta.primary.href}
                label={landingConfig.cta.primary.label}
                position="hero"
                eventType="clientsnda_exit"
                size="lg"
                glow
              />
              <CTAButton
                href={landingConfig.cta.secondary.href}
                label={landingConfig.cta.secondary.label}
                variant="secondary"
                position="hero"
                eventType="cta_secondary_click"
                size="lg"
              />
            </div>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[11px] uppercase tracking-[0.15em] text-ink-500">
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

          <div className="relative hidden lg:block">
            <HeroOrbit />
          </div>
        </div>

        <HeroTicker />
      </div>
    </section>
  );
}
