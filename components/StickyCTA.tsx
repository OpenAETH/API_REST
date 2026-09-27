'use client';

import { useEffect, useState } from 'react';
import { landingConfig } from '@/config/landing';
import { CTAButton } from './CTAButton';
import { captureUtm } from '@/lib/utm';
import { track } from '@/lib/analytics';

export function StickyCTA() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    captureUtm();
    track('landing_view');

    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <div
        className={`fixed inset-x-0 top-0 z-40 hidden transition-all duration-300 md:block ${
          scrolled
            ? 'border-b border-line-900 bg-void-900/80 backdrop-blur-xl'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <div className="mx-auto flex max-w-container items-center justify-between px-6 py-3">
          <div className="flex items-center gap-3">
            <div className="relative flex h-6 w-6 items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-signal-500/20 blur-md" />
              <div className="relative h-2 w-2 rounded-full bg-signal-500" />
            </div>
            <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-ink-300">
              AETHERYON
            </span>
            <span className="h-3 w-px bg-line-700" />
            <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-ink-500">
              REST API / Integración
            </span>
          </div>
          <CTAButton
            href={landingConfig.cta.primary.href}
            label={landingConfig.cta.primary.label}
            position="sticky"
            size="md"
            eventType="clientsnda_exit"
          />
        </div>
      </div>

      <div
        className={`fixed inset-x-0 bottom-0 z-40 border-t border-line-900 bg-void-900/95 p-3 backdrop-blur-xl transition-transform duration-300 md:hidden ${
          scrolled ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <CTAButton
          href={landingConfig.cta.primary.href}
          label={landingConfig.cta.primary.label}
          position="sticky"
          size="lg"
          className="w-full"
          eventType="clientsnda_exit"
        />
      </div>
    </>
  );
}
