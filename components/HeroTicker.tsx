import { ComponentType } from 'react';
import { IconApi, IconBolt, IconData, IconEye, IconKey, IconOrbit, IconRequirements } from './icons';

const items: { label: string; Icon: ComponentType<{ className?: string }> }[] = [
  { label: 'REST APIs', Icon: IconApi },
  { label: 'Integraciones', Icon: IconOrbit },
  { label: 'Auth', Icon: IconKey },
  { label: 'Webhooks', Icon: IconBolt },
  { label: 'Data Transform', Icon: IconData },
  { label: 'Documentation', Icon: IconRequirements },
  { label: 'Observabilidad', Icon: IconEye },
];

export function HeroTicker() {
  return (
    <div className="relative mt-20 overflow-hidden border-y border-line-900 bg-dark-800/40 py-4">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-dark-900 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-dark-900 to-transparent"
      />
      <div className="flex gap-12 whitespace-nowrap animate-ticker">
        {[...items, ...items, ...items].map(({ label, Icon }, i) => (
          <span
            key={i}
            className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-ink-500"
          >
            <Icon className="h-4 w-4 stroke-teal-500" />
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}
