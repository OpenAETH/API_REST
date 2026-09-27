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
      bg-teal-500 text-dark-900 font-semibold
      hover:bg-teal-400
      before:absolute before:inset-0 before:-translate-x-full
      before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent
      hover:before:translate-x-full before:transition-transform before:duration-700
    `,
    secondary: `
      border border-line-700 bg-dark-700/40 text-ink-100 backdrop-blur
      hover:border-teal-500 hover:text-teal-400 hover:bg-dark-700
    `,
    ghost: `text-ink-300 hover:text-teal-400`,
  };

  const glowClass = glow
    ? 'shadow-[0_0_0_1px_rgba(0,229,192,0.3),0_0_40px_-5px_rgba(0,229,192,0.5)] hover:shadow-[0_0_0_1px_rgba(0,229,192,0.5),0_0_60px_-5px_rgba(0,229,192,0.8)]'
    : '';

  return (
    <a
      href={finalHref}
      onClick={() => track(eventType, { position, target: href })}
      className={`group relative inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 whitespace-nowrap ${sizes[size]} ${variants[variant]} ${glowClass} ${className}`}
      aria-label={label}
    >
      <span className="relative z-10">{label}</span>
    </a>
  );
}
