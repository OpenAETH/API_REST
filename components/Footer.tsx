import { landingConfig } from '@/config/landing';
import { IconEngine, IconShip } from './icons';

const { author } = landingConfig;

const links = [
  { href: '#problema', label: 'Problema' },
  { href: '#solucion', label: 'Solución' },
  { href: '#casos', label: 'Casos de uso' },
  { href: '#alcance', label: 'Alcance' },
  { href: '#inversion', label: 'Inversión' },
  { href: '#abrahadabra', label: 'Motor' },
  { href: '#faq', label: 'FAQ' },
];

export function Footer() {
  return (
    <footer className="relative border-t border-line-900 bg-dark-800">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{
          background: 'linear-gradient(to right, transparent, rgba(0,229,192,0.6), transparent)',
        }}
      />
      <div className="mx-auto max-w-container px-6 py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <span className="flex items-center gap-3 font-display text-lg font-semibold tracking-tight text-ink-100">
              <IconShip className="h-6 w-6 stroke-teal-500" />
              AETHERYON Systems
            </span>
            <p className="mt-2 max-w-xs text-sm text-ink-500">
              Capacidad tecnológica independiente para conectar sistemas, datos y aplicaciones.
            </p>
            <p className="mt-4 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-gold-500/90">
              <IconEngine className="h-4 w-4 stroke-current" />
              Propulsado por {landingConfig.engine.name} · {landingConfig.engine.short}
            </p>
          </div>
          <nav aria-label="Secciones" className="flex flex-wrap gap-x-6 gap-y-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-ink-500 transition-colors hover:text-teal-400"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="mt-10 border-t border-line-900 pt-6">
          <div className="flex flex-col gap-4 text-xs text-ink-500 md:flex-row md:items-start md:justify-between">
            <address className="not-italic leading-relaxed">
              <span className="block font-medium text-ink-300">
                {author.name}
                <span className="text-ink-700"> · </span>
                {author.role}
              </span>
              <span className="block text-ink-500">
                {author.country} <span className="text-ink-700">·</span> {author.id}
              </span>
            </address>
            <p className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <a
                href={author.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-teal-400"
              >
                {author.company}
              </a>
              <a
                href={author.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-teal-400"
              >
                LinkedIn
              </a>
            </p>
          </div>
          <div className="mt-6 flex flex-col items-center justify-between gap-3 text-xs text-ink-700 md:flex-row">
            <span>
              © {new Date().getFullYear()} {author.company} · {author.name}
            </span>
            <span className="font-mono tracking-wide text-ink-500">{author.credit}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
