'use client';

import { useEffect, useState } from 'react';
import { track } from '@/lib/analytics';
import { decorateHref } from '@/lib/utm';

interface CTAButtonProps {
  href: string;
  label: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'md' | 'lg';
  position?: 'hero' | 'sticky' | 'final' | 'inline';
  eventType?: 'cta_primary_click' | 'cta_secondary_click' | 'clientsnda_exit';
  glow?: boolean;
  className?: string;
}

export function CTAButton({
  href,
  label,
  variant = 'primary',
  size = 'lg',
  position = 'inline',
  eventType = 'cta_primary_click',
  glow = false,
  className = '',
}: CTAButtonProps) {
  const [finalHref, setFinalHref] = useState(href);

  useEffect(() => {
    setFinalHref(decorateHref(href));
  }, [href]);

  const sizes = {
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-7 py-3.5 text-[15px]',
  };

  const variants = {
    primary: `
      relative overflow-hidden
      bg-signal-500 text-void-900 font-semibold
      hover:bg-signal-400
      before:absolute before:inset-0 before:-translate-x-full
      before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent
      hover:before:translate-x-full before:transition-transform before:duration-700
    `,
    secondary: `
      border border-line-700 bg-void-700/40 text-ink-100 backdrop-blur
      hover:border-signal-500 hover:text-signal-400 hover:bg-void-700
    `,
    ghost: `text-ink-300 hover:text-signal-400`,
  };

  const glowClass = glow
    ? `
      shadow-[0_0_0_1px_rgba(91,140,255,0.5),0_0_50px_-5px_rgba(91,140,255,0.7)]
      hover:shadow-[0_0_0_1px_rgba(125,163,255,0.8),0_0_80px_-5px_rgba(91,140,255,1)]
    `
    : '';
  {variant === 'primary' && (
    <span
      aria-hidden="true"
      className="absolute inset-0 -z-10 rounded-lg bg-signal-500/40 blur-xl opacity-60 animate-glow"
    />
  )}

  return (
    <a
      href={finalHref}
      onClick={() => track(eventType, { position, target: href })}
      className={`group inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 whitespace-nowrap ${sizes[size]} ${variants[variant]} ${glowClass} ${className}`}
      aria-label={label}
    >
      <span className="relative z-10">{label}</span>
      <span className="relative z-10 transition-transform duration-200 group-hover:translate-x-0.5">
        →
      </span>
    </a>
  );
}
