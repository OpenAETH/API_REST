'use client';

import { useEffect, useRef } from 'react';

/**
 * Barra de trayectoria: una nave con su llama de hidrógeno recorre el borde
 * superior de la pantalla a medida que se avanza por la página.
 */
export function ScrollTrajectory() {
  const bar = useRef<HTMLDivElement>(null);
  const ship = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      if (bar.current) bar.current.style.transform = `scaleX(${p})`;
      if (ship.current) {
        ship.current.style.left = `${p * 100}%`;
        ship.current.style.opacity = p > 0.005 ? '1' : '0';
      }
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-x-0 top-0 z-50 h-[3px]">
      <div
        ref={bar}
        className="h-full origin-left bg-gradient-to-r from-violet-500 via-teal-500 to-gold-400"
        style={{ transform: 'scaleX(0)' }}
      />
      <div
        ref={ship}
        className="absolute top-0 -translate-x-1/2 opacity-0 transition-opacity duration-300"
        style={{ left: '0%' }}
      >
        <span className="absolute -left-3 top-[1px] h-[3px] w-6 rounded-full bg-teal-400 blur-[3px]" />
        <svg viewBox="0 0 24 24" className="relative -mt-[5px] h-4 w-4 rotate-90 fill-teal-400 drop-shadow-[0_0_6px_rgba(0,229,192,0.9)]">
          <path d="M12 1c3 2.8 4.5 6.4 4.5 10.5V17h-9v-5.5C7.5 7.4 9 3.8 12 1zM7.5 12 4 16v3h3.5zM16.5 12 20 16v3h-3.5z" />
        </svg>
      </div>
    </div>
  );
}
