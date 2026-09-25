'use client';

import { ReactNode, useRef, useState } from 'react';

export function Card({
  children,
  className = '',
  accent = 'signal',
}: {
  children: ReactNode;
  className?: string;
  accent?: 'signal' | 'aurora' | 'plasma';
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 50, y: 50 });

  const accentMap = {
    signal: 'rgba(91,140,255,0.18)',
    aurora: 'rgba(34,211,164,0.18)',
    plasma: 'rgba(139,92,246,0.18)',
  };

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
        hover:border-line-700 hover:-translate-y-0.5
        ${className}
      `}
      style={{
        backgroundImage: `
          radial-gradient(400px circle at ${pos.x}% ${pos.y}%, ${accentMap[accent]}, transparent 40%),
          linear-gradient(to bottom right, rgba(10,13,24,0.7), rgba(6,8,15,0.75))
        `,
      }}
    >
      {children}
    </div>
  );
}