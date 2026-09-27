'use client';

import { ReactNode, useRef, useState } from 'react';

export function Card({
  children,
  className = '',
  accent = 'signal',
}: {
  children: ReactNode;
  className?: string;
  accent?: 'signal' | 'aurora' | 'plasma' | 'coral' | 'amber';
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 50, y: 50 });

  const accentMap = {
    signal: {
      spotlight: 'rgba(91,140,255,0.24)',
      border: 'rgba(91,140,255,0.35)',
      tint: 'rgba(91,140,255,0.05)',
    },
    aurora: {
      spotlight: 'rgba(34,211,164,0.22)',
      border: 'rgba(34,211,164,0.35)',
      tint: 'rgba(34,211,164,0.05)',
    },
    plasma: {
      spotlight: 'rgba(139,92,246,0.24)',
      border: 'rgba(139,92,246,0.35)',
      tint: 'rgba(139,92,246,0.05)',
    },
    coral: {
      spotlight: 'rgba(255,107,138,0.22)',
      border: 'rgba(255,107,138,0.35)',
      tint: 'rgba(255,107,138,0.05)',
    },
    amber: {
      spotlight: 'rgba(251,191,36,0.22)',
      border: 'rgba(251,191,36,0.35)',
      tint: 'rgba(251,191,36,0.05)',
    },
  };

  const a = accentMap[accent];

  return (
    <div
      ref={ref}
      onMouseMove={(e) => {
        const rect = ref.current?.getBoundingClientRect();
        if (!rect) return;
        setPos({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }}
      className={`
        group relative overflow-hidden rounded-xl
        border border-line-900/80
        bg-void-700/50 backdrop-blur-sm
        p-6
        transition-all duration-300
        hover:-translate-y-0.5
        ${className}
      `}
      style={{
        backgroundImage: `
          radial-gradient(400px circle at ${pos.x}% ${pos.y}%, ${a.spotlight}, transparent 40%),
          linear-gradient(135deg, ${a.tint} 0%, transparent 40%),
          linear-gradient(to bottom right, rgba(13,18,48,0.7), rgba(6,8,15,0.75))
        `,
      }}
    >
      {children}
    </div>
  );
}