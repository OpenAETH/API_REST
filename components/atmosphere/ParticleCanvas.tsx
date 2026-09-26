'use client';

import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  alpha: number;
  color: string;
}

export function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;
    if (prefersReducedMotion) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let raf = 0;
    let running = true;
    let lastFrame = 0;
    const FRAME_MS = 1000 / 30;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    // Paleta variada
    const colors = [
      'rgba(91, 140, 255, ALPHA)',   // signal
      'rgba(139, 92, 246, ALPHA)',   // plasma
      'rgba(34, 211, 164, ALPHA)',   // aurora
      'rgba(255, 107, 138, ALPHA)',  // coral
      'rgba(251, 191, 36, ALPHA)',   // amber
    ];

    let particles: Particle[] = [];

    const spawn = (w: number, h: number): Particle[] => {
      // Más partículas (antes 40 max)
      const count = Math.min(70, Math.floor((w * h) / 28000));
      return Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.10,
        vy: -0.10 - Math.random() * 0.15,
        r: 0.7 + Math.random() * 1.5,
        alpha: 0.20 + Math.random() * 0.45,
        color: colors[Math.floor(Math.random() * colors.length)],
      }));
    };

    const resize = () => {
      const { innerWidth: w, innerHeight: h } = window;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      particles = spawn(w, h);
    };

    resize();
    window.addEventListener('resize', resize);

    const draw = (time: number) => {
      if (!running) return;
      raf = requestAnimationFrame(draw);

      if (time - lastFrame < FRAME_MS) return;
      lastFrame = time;

      const w = window.innerWidth;
      const h = window.innerHeight;

      ctx.clearRect(0, 0, w, h);
      ctx.globalCompositeOperation = 'lighter';

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;

        if (p.y < -10) {
          p.y = h + 10;
          p.x = Math.random() * w;
        }
        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;

        const alpha = p.alpha * (0.6 + Math.sin(time * 0.001 + p.x) * 0.4);
        ctx.fillStyle = p.color.replace('ALPHA', alpha.toFixed(3));
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
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
      className="absolute inset-0 h-full w-full opacity-80"
    />
  );
}