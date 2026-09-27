import { landingConfig } from '@/config/landing';

export function PriceBlock() {
  const { amount, currency, label } = landingConfig.price;

  return (
    <div className="relative overflow-hidden rounded-2xl border border-teal-500/30 bg-gradient-to-br from-dark-700/70 to-dark-900/80 p-8 backdrop-blur-sm md:p-12">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-px rounded-2xl"
        style={{
          background:
            'radial-gradient(600px circle at 0% 0%, rgba(0,229,192,0.15), transparent 40%)',
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,229,192,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,229,192,0.5) 1px, transparent 1px)
          `,
          backgroundSize: '32px 32px',
        }}
      />
      <div className="relative">
        <div className="mb-6 flex items-center gap-3">
          <span className="h-1.5 w-1.5 rounded-full bg-gold-500" />
          <span className="text-xs font-medium text-ink-500">
            REST API / Integración
          </span>
        </div>
        <div className="mb-3 flex items-baseline gap-4">
          <span className="text-sm text-ink-500">
            {label}
          </span>
          <span className="font-display text-6xl font-semibold tracking-tight text-ink-100 md:text-7xl">
            {currency}{' '}
            <span className="bg-gradient-to-r from-teal-400 to-violet-400 bg-clip-text text-transparent">
              {amount.toLocaleString('en-US')}
            </span>
          </span>
        </div>
        <p className="max-w-md text-sm text-ink-500">
          Proyectos de mayor complejidad pueden ampliarse según alcance.
        </p>
      </div>
    </div>
  );
}
