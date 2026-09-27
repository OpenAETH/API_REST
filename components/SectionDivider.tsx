export function SectionDivider({ accent = 'teal' }: { accent?: string }) {
  const colors: Record<string, string> = {
    teal: '#00E5C0',
    gold: '#FFD166',
    violet: '#B066FF',
  };
  const c = colors[accent] ?? colors.teal;

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
