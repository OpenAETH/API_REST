'use client';

import { useEffect, useState } from 'react';
import { AuroraCanvas } from './atmosphere/AuroraCanvas';
import { ParticleCanvas } from './atmosphere/ParticleCanvas';
import { GridLayer } from './atmosphere/GridLayer';
import { ScanlineLayer } from './atmosphere/ScanlineLayer';

type Intensity = 'off' | 'soft' | 'full';

export function Atmosphere({ intensity = 'full' as Intensity }) {
  const [resolved, setResolved] = useState<Intensity>(intensity);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      setResolved('off');
    } else if (window.innerWidth < 640) {
      setResolved('soft');
    }
  }, [intensity]);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {/* Base: gradiente azul profundo en lugar de negro plano */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 50% 0%, #0a1030 0%, transparent 60%),
            radial-gradient(ellipse 60% 50% at 100% 100%, #1a0f2e 0%, transparent 60%),
            linear-gradient(180deg, #050818 0%, #060a22 50%, #050818 100%)
          `,
        }}
      />

      {resolved !== 'off' && (
        <>
          <AuroraCanvas />
          <GridLayer />
          {resolved === 'full' && <ParticleCanvas />}
          <ScanlineLayer />
        </>
      )}

      {/* Noise */}
      <div
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Vignette más suave */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 110% 90% at 50% 50%, transparent 50%, rgba(5,8,24,0.45) 100%)',
        }}
      />
    </div>
  );
}