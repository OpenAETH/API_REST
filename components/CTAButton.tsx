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
      bg-gradient-to-r from-teal-500 to-teal-400 text-dark-900 font-semibold
      hover:from-teal-400 hover:to-[#7EE8FF]
      before:absolute before:inset-0 before:-translate-x-full
      before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent
      hover:before:translate-x-full before:transition-transform before:duration-700
    `,
    secondary: `
      border border-line-700 bg-dark-700/40 text-ink-100 backdrop-blur
      hover:border-teal-500 hover:text-teal-400 hover:bg-dark-700
    `,
    ghost: `text-ink-300 hover:text-teal-400`,
  };

  const glowClass = glow
    ? `
      shadow-[0_0_0_1px_rgba(0,229,192,0.5),0_0_50px_-5px_rgba(0,229,192,0.6)]
      hover:shadow-[0_0_0_1px_rgba(126,232,255,0.8),0_0_80px_-5px_rgba(0,229,192,0.9)]
    `
    : '';

  return (
    <a
      href={finalHref}
      onClick={() => track(eventType, { position, target: href })}
      className={`group inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 whitespace-nowrap ${sizes[size]} ${variants[variant]} ${glowClass} ${className}`}
      aria-label={label}
    >
      <span className="relative z-10">{label}</span>
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="relative z-10 h-4 w-4 stroke-current transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-1"
      >
        <path d="M7 17 17 7M8 7h9v9" />
      </svg>
    </a>
  );
}
