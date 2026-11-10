import { ReactNode } from 'react';

interface IconProps {
  className?: string;
}

const base = 'h-5 w-5 stroke-current';

function Svg({ className = base, children }: IconProps & { children: ReactNode }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

/* ---------- Íconos de sección (sistemas de la nave) ---------- */

/** Baliza de emergencia: señal de alerta en cubierta. */
export function IconProblem(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M7 17v-3a5 5 0 0 1 10 0v3" />
      <path d="M5 17h14v3H5z" />
      <path d="M12 2v2M4.2 6.2l1.4 1.4M19.8 6.2l-1.4 1.4M12 10.5v2" />
    </Svg>
  );
}

/** Módulos acoplados por un collar de atraque. */
export function IconSolution(p: IconProps) {
  return (
    <Svg {...p}>
      <rect x="2" y="8" width="7" height="8" rx="2" />
      <rect x="15" y="8" width="7" height="8" rx="2" />
      <path d="M9 12h6" />
      <circle cx="12" cy="12" r="1.2" fill="currentColor" />
    </Svg>
  );
}

/** Ruta de acople entre dos puntos. */
export function IconCases(p: IconProps) {
  return (
    <Svg {...p}>
      <circle cx="5" cy="18" r="2" />
      <circle cx="19" cy="6" r="2" />
      <path d="M7 18h6a4 4 0 0 0 4-4V8" />
    </Svg>
  );
}

/** Casco principal con aletas y tobera. */
export function IconBuild(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M12 2c3 2.5 4 6 4 10v6H8v-6c0-4 1-7.5 4-10z" />
      <circle cx="12" cy="9.5" r="1.8" />
      <path d="M8 14l-3 4v2h3M16 14l3 4v2h-3M10 18v2h4v-2" />
    </Svg>
  );
}

/** Contenedor de carga. */
export function IconDeliverables(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M3 7l9-4 9 4v10l-9 4-9-4z" />
      <path d="M3 7l9 4 9-4M12 11v10" />
    </Svg>
  );
}

/** Trayectoria con waypoints. */
export function IconMethodology(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M4 19c3 0 4-3 6-6s4-5 10-7" />
      <circle cx="4" cy="19" r="1.2" fill="currentColor" />
      <circle cx="10" cy="13" r="1.2" fill="currentColor" />
      <circle cx="20" cy="6" r="1.6" fill="currentColor" />
    </Svg>
  );
}

export function IconRequirements(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6M9 13h6M9 17h6" />
    </Svg>
  );
}

/** Radar de alcance. */
export function IconScope(p: IconProps) {
  return (
    <Svg {...p}>
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="5" />
      <path d="M12 12l6.5-6.5" />
      <circle cx="12" cy="12" r="1" fill="currentColor" />
    </Svg>
  );
}

/** Celda de combustible H₂. */
export function IconInvestment(p: IconProps) {
  return (
    <Svg {...p}>
      <rect x="5" y="6" width="14" height="14" rx="4" />
      <path d="M9 6V4h6v2" />
      <path d="M13 9.5l-3 4h4l-3 4" />
    </Svg>
  );
}

/** Reloj de misión. */
export function IconTimeline(p: IconProps) {
  return (
    <Svg {...p}>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </Svg>
  );
}

/** Esclusa presurizada. */
export function IconConditions(p: IconProps) {
  return (
    <Svg {...p}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="4.5" />
      <path d="M12 3v3.5M12 17.5V21M3 12h3.5M17.5 12H21" />
    </Svg>
  );
}

export function IconQuestion(p: IconProps) {
  return (
    <Svg {...p}>
      <circle cx="12" cy="12" r="10" />
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3M12 17h.01" />
    </Svg>
  );
}

export function IconBadge(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M12 15a7 7 0 1 0 0-14 7 7 0 0 0 0 14z" />
      <path d="M8.21 13.89 7 23l5-3 5 3-1.21-9.12" />
    </Svg>
  );
}

export function IconDifference(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z" />
    </Svg>
  );
}

export function IconRocket(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </Svg>
  );
}

export function IconSignal(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M2 20h.01M7 20v-4M12 20v-8M17 20V8M22 4v16" />
    </Svg>
  );
}

/* ---------- Flota AETHERYON ---------- */

/** Nave interconectada: casco central + pods laterales + llama H₂. */
export function IconShip(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M12 2c2 2 3 5 3 8v6H9v-6c0-3 1-6 3-8z" />
      <rect x="2.5" y="10" width="3.5" height="6" rx="1.2" />
      <rect x="18" y="10" width="3.5" height="6" rx="1.2" />
      <path d="M6 13h3M15 13h3" />
      <path d="M10.5 19c.4 1.4.8 2.4 1.5 3 .7-.6 1.1-1.6 1.5-3" />
    </Svg>
  );
}

/** Tobera del motor ABRAHADABRA con su llama. */
export function IconEngine(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M8 3h8v3H8z" />
      <path d="M9 6l-3 8h12l-3-8" />
      <path d="M9 14c0 3 1.5 5 3 8 1.5-3 3-5 3-8" />
    </Svg>
  );
}

/** Molécula de hidrógeno. */
export function IconH2(p: IconProps) {
  return (
    <Svg {...p}>
      <circle cx="8.5" cy="12" r="4.5" />
      <circle cx="15.5" cy="12" r="4.5" />
      <circle cx="8.5" cy="12" r="1" fill="currentColor" />
      <circle cx="15.5" cy="12" r="1" fill="currentColor" />
    </Svg>
  );
}

/** Conducto entre dos nodos. */
export function IconConduit(p: IconProps) {
  return (
    <Svg {...p}>
      <circle cx="4.5" cy="12" r="2.5" />
      <circle cx="19.5" cy="12" r="2.5" />
      <path d="M7 12h10M13 9l3 3-3 3" />
    </Svg>
  );
}

export function IconOrbit(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M3 12c0-3 4-5 9-5s9 2 9 5-4 5-9 5-9-2-9-5z" />
      <circle cx="12" cy="12" r="2.5" />
    </Svg>
  );
}

export function IconApi(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M8 7l-5 5 5 5M16 7l5 5-5 5M14 4l-4 16" />
    </Svg>
  );
}

export function IconKey(p: IconProps) {
  return (
    <Svg {...p}>
      <circle cx="8" cy="15" r="4" />
      <path d="M10.8 12.2L20 3M16 7l3 3M14 9l2 2" />
    </Svg>
  );
}

export function IconBolt(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M13 2L4 14h7l-1 8 9-12h-7z" />
    </Svg>
  );
}

export function IconData(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M4 7c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3z" />
      <path d="M4 7v10c0 1.7 3.6 3 8 3s8-1.3 8-3V7M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
    </Svg>
  );
}

export function IconEye(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z" />
      <circle cx="12" cy="12" r="3" />
    </Svg>
  );
}