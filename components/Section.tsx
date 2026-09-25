import { ReactNode } from 'react';

type Accent = 'signal' | 'aurora' | 'plasma';

interface SectionProps {
  id?: string;
  index?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  accent?: Accent;
  children: ReactNode;
  className?: string;
  tone?: 'default' | 'panel' | 'accent';
  icon?: ReactNode;
  watermark?: string;
}

const accentMap: Record<
  Accent,
  {
    text: string;
    bg: string;
    line: string;
    glowTop: string;
    glowSide: string;
    glowSidePos: 'left' | 'right';
    borderTop: string;
  }
> = {
  signal: {
    text: 'text-signal-400',
    bg: 'bg-signal-500',
    line: 'bg-signal-500/40',
    glowTop: 'rgba(91,140,255,0.16)',
    glowSide: 'rgba(91,140,255,0.10)',
    glowSidePos: 'right',
    borderTop: 'rgba(91,140,255,0.35)',
  },
  aurora: {
    text: 'text-aurora-500',
    bg: 'bg-aurora-500',
    line: 'bg-aurora-500/40',
    glowTop: 'rgba(34,211,164,0.14)',
    glowSide: 'rgba(34,211,164,0.09)',
    glowSidePos: 'left',
    borderTop: 'rgba(34,211,164,0.3)',
  },
  plasma: {
    text: 'text-plasma-400',
    bg: 'bg-plasma-500',
    line: 'bg-plasma-500/40',
    glowTop: 'rgba(139,92,246,0.16)',
    glowSide: 'rgba(139,92,246,0.10)',
    glowSidePos: 'right',
    borderTop: 'rgba(139,92,246,0.35)',
  },
};

export function Section({
  id,
  index,
  eyebrow,
  title,
  description,
  accent = 'signal',
  icon,
  watermark,
  children,
  className = '',
  tone = 'default',
}: SectionProps) {
  const bg = {
    // Antes era bg-void-900 → ahora translúcido
    default: 'bg-void-900/55',
    panel: 'bg-void-800/45',
    accent: 'bg-gradient-to-b from-void-900/40 via-void-800/55 to-void-900/40',
  }[tone];

  const a = accentMap[accent];

  return (
    <section
      id={id}
      className={`relative isolate overflow-hidden ${bg} border-b border-line-900/40 ${className}`}
    >
      {/* ===== ATMÓSFERA LOCAL DE SECCIÓN ===== */}

      {/* 1. Glow radial superior (siempre en el centro-arriba) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[500px] w-[1000px] -translate-x-1/2 blur-[120px]"
        style={{
          background: `radial-gradient(ellipse, ${a.glowTop} 0%, transparent 60%)`,
        }}
      />

      {/* 2. Glow lateral (izq o der según acento) */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute top-1/4 ${
          a.glowSidePos === 'left' ? '-left-40' : '-right-40'
        } -z-10 h-[600px] w-[600px] rounded-full blur-[140px]`}
        style={{
          background: `radial-gradient(circle, ${a.glowSide} 0%, transparent 70%)`,
        }}
      />

      {/* 3. Grid local sutil */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
          maskImage:
            'radial-gradient(ellipse 70% 60% at 50% 50%, #000 20%, transparent 80%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 70% 60% at 50% 50%, #000 20%, transparent 80%)',
        }}
      />

      {/* 4. Divisor superior animado */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{
          background: `linear-gradient(to right, transparent, ${a.borderTop}, transparent)`,
        }}
      />

      {/* 5. Divisor inferior animado */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px"
        style={{
          background: `linear-gradient(to right, transparent, ${a.borderTop}, transparent)`,
        }}
      />

      {/* 6. Watermark opcional (número gigante) */}
      {watermark && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-4 top-12 -z-10 select-none font-display text-[180px] font-bold leading-none text-ink-100/[0.02] md:-right-8 md:top-16 md:text-[280px]"
        >
          {watermark}
        </span>
      )}

      {/* ===== CONTENIDO ===== */}
      <div className="relative mx-auto max-w-container px-6 py-20 md:py-28">
        {(index || eyebrow || title) && (
          <header className="mb-14 md:mb-20">
            <div className="mb-6 flex items-center gap-4">
              {index && (
                <>
                  <span className={`font-mono text-xs tracking-[0.25em] ${a.text}`}>
                    {index}
                  </span>
                  <span className={`h-px w-10 ${a.line}`} />
                </>
              )}
              {eyebrow && (
                <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-ink-500">
                  {eyebrow}
                </span>
              )}
            </div>

            <div className="flex items-start gap-5">
              {icon && (
                <div
                  className={`relative mt-1 hidden h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg border border-line-700 bg-void-700/70 backdrop-blur-sm md:flex ${a.text}`}
                >
                  {/* Glow interno del ícono */}
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 rounded-lg opacity-40 blur-md"
                    style={{ background: a.glowTop }}
                  />
                  <span className="relative">{icon}</span>
                </div>
              )}
              <div>
                {title && (
                  <h2 className="max-w-3xl font-display text-[clamp(1.875rem,3.5vw,3rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-ink-100">
                    {title}
                  </h2>
                )}
                {description && (
                  <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-300">
                    {description}
                  </p>
                )}
              </div>
            </div>
          </header>
        )}

        {children}
      </div>
    </section>
  );
}