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
        style={{ background: 'radial-gradient(ellipse, #00E5C0 0%, transparent 60%)' }}
      />

      <div className="relative mx-auto max-w-container px-6 pb-24 pt-32 md:pb-32 md:pt-40">
        <div className="grid gap-16 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <div>
            <p className="mb-5 text-sm font-medium text-teal-400">AETHERYON Systems</p>

            <h1 className="mb-8 font-display text-[clamp(2.75rem,6vw,5rem)] font-semibold leading-[1.02] tracking-[-0.03em] text-ink-100">
              Tus sistemas no tienen que trabajar aislados.
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

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-ink-500">
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

          <div className="relative hidden lg:block">
            <HeroOrbit />
          </div>
        </div>

        <HeroTicker />
      </div>
    </section>
  );
}
