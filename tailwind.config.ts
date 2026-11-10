import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: {
          900: '#07070F',
          800: '#0D0D1A',
          700: '#141425',
          600: '#1B1B30',
          500: '#25253F',
        },
        line: {
          900: '#1D1D30',
          700: '#2A2A45',
          500: '#3C3C60',
        },
        ink: {
          100: '#F5F5FB',
          300: '#C7C8DA',
          500: '#8D8FA8',
          700: '#5C5E78',
        },
        teal: {
          400: '#33ECD0',
          500: '#00E5C0',
          600: '#00B899',
          glow: 'rgba(0, 229, 192, 0.25)',
        },
        gold: {
          400: '#FFDD85',
          500: '#FFD166',
          600: '#E6AD33',
          glow: 'rgba(255, 209, 102, 0.22)',
        },
        violet: {
          400: '#C48CFF',
          500: '#B066FF',
          600: '#9440E6',
          glow: 'rgba(176, 102, 255, 0.22)',
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
        flame: 'flame-flicker 0.9s ease-in-out infinite',
        'flame-core': 'flame-flicker 0.55s ease-in-out infinite',
        flow: 'conduit-flow 1.6s linear infinite',
        twinkle: 'twinkle 4s ease-in-out infinite',
        hover: 'ship-hover 7s ease-in-out infinite',
        beacon: 'beacon 2.4s ease-in-out infinite',
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
        'flame-flicker': {
          '0%, 100%': { transform: 'scaleY(1) scaleX(1)', opacity: '0.95' },
          '30%': { transform: 'scaleY(1.14) scaleX(0.94)', opacity: '1' },
          '60%': { transform: 'scaleY(0.9) scaleX(1.05)', opacity: '0.85' },
        },
        'conduit-flow': {
          from: { strokeDashoffset: '0' },
          to: { strokeDashoffset: '-24' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.15' },
          '50%': { opacity: '0.9' },
        },
        'ship-hover': {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-10px) rotate(0.6deg)' },
        },
        beacon: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
