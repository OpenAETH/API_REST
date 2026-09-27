const items = [
  'REST APIs',
  'Integraciones',
  'Auth',
  'Webhooks',
  'Data Transform',
  'Documentation',
  'Observabilidad',
];

export function HeroTicker() {
  return (
    <div className="relative mt-20 overflow-hidden border-y border-line-900 bg-void-800/40 py-4">
      <div className="flex gap-12 whitespace-nowrap animate-ticker">
        {[...items, ...items, ...items].map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-4 font-mono text-xs uppercase tracking-[0.25em] text-ink-500"
          >
            <span className="h-1 w-1 rounded-full bg-signal-500" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
