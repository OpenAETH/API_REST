export function GridLayer() {
  return (
    <>
      <div
        aria-hidden="true"
        className="aetheryon-grid absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(91,140,255,0.14) 1px, transparent 1px),
            linear-gradient(90deg, rgba(91,140,255,0.14) 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px',
          maskImage:
            'radial-gradient(ellipse 80% 60% at 50% 30%, #000 30%, transparent 90%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 80% 60% at 50% 30%, #000 30%, transparent 90%)',
        }}
      />

      {/* Grid secundario más fino para dar sensación de capas */}
      <div
        aria-hidden="true"
        className="aetheryon-grid-slow absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(139,92,246,0.14) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139,92,246,0.14) 1px, transparent 1px)
          `,
          backgroundSize: '128px 128px',
          maskImage:
            'radial-gradient(ellipse 60% 50% at 50% 70%, #000 20%, transparent 80%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 60% 50% at 50% 70%, #000 20%, transparent 80%)',
        }}
      />
    </>
  );
}