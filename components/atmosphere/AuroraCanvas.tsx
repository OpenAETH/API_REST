'use client';

import { useEffect, useRef } from 'react';

interface Blob {
  color: string;
  radius: number;
  speedX: number;
  speedY: number;
  phaseX: number;
  phaseY: number;
  ampX: number;
  ampY: number;
  cx: number;
  cy: number;
}

export function AuroraCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;
    if (prefersReducedMotion) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let raf = 0;
    let running = true;
    let lastFrame = 0;
    const FRAME_MS = 1000 / 30;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      const { innerWidth: w, innerHeight: h } = window;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener('resize', resize);

    // Blobs más vivos y saturados
    const blobs: Blob[] = [
      {
        color: 'rgba(91, 140, 255, 0.60)',  // signal — azul
        radius: 520,
        speedX: 0.00014,
        speedY: 0.00012,
        phaseX: 0,
        phaseY: Math.PI / 3,
        ampX: 0.26,
        ampY: 0.20,
        cx: 0.22,
        cy: 0.28,
      },
      {
        color: 'rgba(139, 92, 246, 0.50)',  // plasma — violeta
        radius: 460,
        speedX: 0.00010,
        speedY: 0.00015,
        phaseX: Math.PI / 2,
        phaseY: 0,
        ampX: 0.30,
        ampY: 0.24,
        cx: 0.80,
        cy: 0.38,
      },
      {
        color: 'rgba(34, 211, 164, 0.38)',  // aurora — verde cyan
        radius: 420,
        speedX: 0.00012,
        speedY: 0.00009,
        phaseX: Math.PI,
        phaseY: Math.PI / 4,
        ampX: 0.22,
        ampY: 0.26,
        cx: 0.50,
        cy: 0.82,
      },
      {
        color: 'rgba(255, 107, 138, 0.28)', // coral — NUEVO
        radius: 380,
        speedX: 0.00008,
        speedY: 0.00011,
        phaseX: Math.PI * 1.5,
        phaseY: Math.PI / 6,
        ampX: 0.24,
        ampY: 0.18,
        cx: 0.35,
        cy: 0.65,
      },
    ];

    const draw = (time: number) => {
      if (!running) return;
      raf = requestAnimationFrame(draw);

      if (time - lastFrame < FRAME_MS) return;
      lastFrame = time;

      const w = window.innerWidth;
      const h = window.innerHeight;

      ctx.clearRect(0, 0, w, h);
      ctx.globalCompositeOperation = 'lighter';

      for (const b of blobs) {
        const t = time;
        const x = (b.cx + Math.sin(t * b.speedX + b.phaseX) * b.ampX) * w;
        const y = (b.cy + Math.cos(t * b.speedY + b.phaseY) * b.ampY) * h;

        const gradient = ctx.createRadialGradient(x, y, 0, x, y, b.radius);
        gradient.addColorStop(0, b.color);
        gradient.addColorStop(0.45, b.color.replace(/[\d.]+\)$/, '0.14)'));
        gradient.addColorStop(1, 'transparent');

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, w, h);
      }
    };

    raf = requestAnimationFrame(draw);

    const onVisibility = () => {
      running = document.visibilityState === 'visible';
      if (running) {
        lastFrame = 0;
        raf = requestAnimationFrame(draw);
      } else {
        cancelAnimationFrame(raf);
      }
    };

    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full"
      style={{ filter: 'blur(70px) saturate(160%)' }}
    />
  );
}