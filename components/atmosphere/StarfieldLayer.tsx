const COLORS = ['#F5F5FB', '#33ECD0', '#FFDD85', '#C48CFF'];

// PRNG determinista (mulberry32): mismo resultado en servidor y cliente.
function rng(seed: number) {
  let a = seed;
  return () => {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const rand = rng(1109);
const stars = Array.from({ length: 90 }, (_, i) => ({
  x: +(rand() * 100).toFixed(2),
  y: +(rand() * 100).toFixed(2),
  r: +(0.5 + rand() * 1.1).toFixed(2),
  c: COLORS[Math.floor(rand() * COLORS.length)],
  d: +(rand() * 4).toFixed(2),
  twinkle: i % 3 !== 0,
}));

export function StarfieldLayer() {
  return (
    <svg
      aria-hidden="true"
      className="absolute inset-0 h-full w-full opacity-70"
      preserveAspectRatio="none"
    >
      {stars.map((s, i) => (
        <circle
          key={i}
          cx={`${s.x}%`}
          cy={`${s.y}%`}
          r={s.r}
          fill={s.c}
          opacity={s.twinkle ? undefined : 0.35}
          className={s.twinkle ? 'animate-twinkle' : undefined}
          style={s.twinkle ? { animationDelay: `${s.d}s` } : undefined}
        />
      ))}
    </svg>
  );
}
