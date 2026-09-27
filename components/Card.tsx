'use client';

import { ReactNode, useRef, useState } from 'react';

export function Card({
  children,
  className = '',
  accent = 'teal',
}: {
  children: ReactNode;
  className?: string;
  accent?: 'teal' | 'gold' | 'violet';
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 50, y: 50 });

  const accentMap = {
    teal: {
      spotlight: 'rgba(0,229,192,0.22)',
      border: 'rgba(0,229,192,0.35)',
      tint: 'rgba(0,229,192,0.05)',
    },
    gold: {
      spotlight: 'rgba(255,209,102,0.20)',
      border: 'rgba(255,209,102,0.35)',
      tint: 'rgba(255,209,102,0.05)',
    },
    violet: {
      spotlight: 'rgba(176,102,255,0.22)',
      border: 'rgba(176,102,255,0.35)',
      tint: 'rgba(176,102,255,0.05)',
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
        bg-dark-700/50 backdrop-blur-sm
        p-6
        transition-all duration-300
        hover:-translate-y-0.5
        ${className}
      `}
      style={{
        backgroundImage: `
          radial-gradient(400px circle at ${pos.x}% ${pos.y}%, ${a.spotlight}, transparent 40%),
          linear-gradient(135deg, ${a.tint} 0%, transparent 40%),
          linear-gradient(to bottom right, rgba(13,13,26,0.7), rgba(7,7,15,0.75))
        `,
      }}
    >
      {children}
    </div>
  );
}
