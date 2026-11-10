import { landingConfig } from '@/config/landing';
import { CTAButton } from './CTAButton';
import { HeroShip } from './HeroShip';
import { HeroTicker } from './HeroTicker';
import { IconEngine } from './icons';

const trust = ['Desde USD 5.000', 'Contratación directa', 'Sin reunión previa'];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-line-900">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[600px] w-[900px] -translate-x-1/2 opacity-40 blur-[100px]"
        style={{ background: 'radial-gradient(ellipse, #00E5C0 0%, transparent 60%)' }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0 -z-10 h-[500px] w-[600px] opacity-30 blur-[120px]"
        style={{ background: 'radial-gradient(ellipse, #B066FF 0%, transparent 65%)' }}
      />

      <div className="relative mx-auto max-w-container px-6 pb-24 pt-32 md:pb-32 md:pt-40">
        <div className="grid gap-16 lg:grid-cols-[1.25fr_1fr] lg:items-center">
          <div>
            <div className="mb-7 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-teal-500/30 bg-teal-500/10 px-3.5 py-1.5 text-xs font-medium text-teal-400">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-500 opacity-70" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-teal-500" />
                </span>
                AETHERYON Systems · REST API / Integración
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-gold-500/10 px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-gold-500">
                <IconEngine className="h-3.5 w-3.5 stroke-current" />
                {landingConfig.engine.name} · {landingConfig.engine.short}
              </span>
            </div>

            <h1 className="mb-8 font-display text-[clamp(2.75rem,6vw,5rem)] font-semibold leading-[1.02] tracking-[-0.03em] text-ink-100">
              Tus sistemas no tienen que trabajar <span className="text-h2-flame">aislados.</span>
            </h1>

            <p className="mb-10 max-w-xl text-[clamp(1.125rem,1.4vw,1.375rem)] leading-relaxed text-ink-300">
              Acoplamos tus aplicaciones, datos y servicios en una sola nave: una API REST segura,
              documentada y mantenible. Energía limpia, empuje constante y sin fricción
              innecesaria entre sistemas.
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

            <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-ink-500">
              {trust.map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-gold-500" />
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative mx-auto w-full max-w-[320px] lg:max-w-none">
            <HeroShip />
          </div>
        </div>

        <HeroTicker />
      </div>
    </section>
  );
}
