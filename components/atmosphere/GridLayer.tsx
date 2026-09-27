export function GridLayer() {
  return (
    <div
      aria-hidden="true"
      className="aetheryon-grid absolute inset-0 opacity-[0.16]"
      style={{
        backgroundImage: `
          linear-gradient(rgba(0,229,192,0.25) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,229,192,0.25) 1px, transparent 1px)
        `,
        backgroundSize: '64px 64px',
        maskImage:
          'radial-gradient(ellipse 80% 60% at 50% 30%, #000 30%, transparent 90%)',
        WebkitMaskImage:
          'radial-gradient(ellipse 80% 60% at 50% 30%, #000 30%, transparent 90%)',
      }}
    />
  );
}
