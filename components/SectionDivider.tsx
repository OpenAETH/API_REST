export function SectionDivider({ accent = 'signal' }: { accent?: string }) {
  const colors: Record<string, string> = {
    signal: '#5b8cff',
    aurora: '#22d3a4',
    plasma: '#8b5cf6',
    coral: '#ff6b8a',
    amber: '#fbbf24',
  };
  const c = colors[accent] ?? colors.signal;

  return (
    <div
      aria-hidden="true"
      className="relative h-px w-full"
      style={{
        background: `linear-gradient(to right, transparent 0%, ${c}66 20%, ${c}cc 50%, ${c}66 80%, transparent 100%)`,
      }}
    />
  );
}