import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        void: {
          900: '#030409',
          800: '#06080f',
          700: '#0a0d18',
          600: '#0f1322',
          500: '#161b2e',
        },
        line: {
          900: '#1a1f33',
          700: '#232a42',
          500: '#333b5a',
        },
        ink: {
          100: '#f5f7fc',
          300: '#c5cbd9',
          500: '#8b93ab',
          700: '#5b6479',
        },
        signal: {
          400: '#7da3ff',
          500: '#5b8cff',
          600: '#3d6fe6',
          glow: 'rgba(91, 140, 255, 0.25)',
        },
        aurora: {
          400: '#4ad9d9',
          500: '#22d3a4',
          glow: 'rgba(34, 211, 164, 0.20)',
        },
        plasma: {
          400: '#a78bfa',
          500: '#8b5cf6',
          glow: 'rgba(139, 92, 246, 0.20)',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        container: '1140px',
        prose: '720px',
      },
      animation: {
        ticker: 'ticker 40s linear infinite',
        float: 'float 6s ease-in-out infinite',
        glow: 'glow-pulse 4s ease-in-out infinite',
      },
      keyframes: {
        ticker: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-33.333%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.7' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
