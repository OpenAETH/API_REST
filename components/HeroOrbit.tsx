export function HeroOrbit() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[480px]">
      {/* Anillos */}
      <div className="absolute inset-0 rounded-full border border-line-700/60" />
      <div className="absolute inset-8 rounded-full border border-line-700/40" />
      <div className="absolute inset-20 rounded-full border border-line-900/60" />

      {/* Órbitas animadas */}
      <div className="absolute inset-0 animate-[spin_40s_linear_infinite]">
        <div className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-500 shadow-[0_0_20px_4px_rgba(0,229,192,0.6)]" />
      </div>
      <div className="absolute inset-8 animate-[spin_30s_linear_infinite_reverse]">
        <div className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-500 shadow-[0_0_16px_3px_rgba(255,209,102,0.6)]" />
      </div>
      <div className="absolute inset-20 animate-[spin_20s_linear_infinite]">
        <div className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-400 shadow-[0_0_16px_3px_rgba(176,102,255,0.6)]" />
      </div>

      {/* Núcleo */}
      <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2">
        <div className="absolute inset-0 animate-pulse rounded-full bg-teal-500/20 blur-2xl" />
        <div className="relative flex h-full w-full items-center justify-center rounded-full border border-teal-500/40 bg-dark-700/80 backdrop-blur">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-teal-400">
            API
          </span>
        </div>
      </div>
    </div>
  );
}
