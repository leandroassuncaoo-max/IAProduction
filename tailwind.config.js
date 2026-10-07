/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Pretos quentes de sala de edição.
        ink: {
          950: '#09090a',
          900: '#0e0e10',
          800: '#141416',
          700: '#1b1b1e',
          600: '#252528',
          500: '#38383d',
        },
        // Branco "papel" — texto principal e o card em destaque.
        paper: {
          DEFAULT: '#f3efe6',
          muted: '#d9d4c9',
        },
        // O vermelho do REC: único acento da marca.
        rec: {
          200: '#ffc9bd',
          300: '#ff9f8a',
          400: '#ff6a4d',
          500: '#ff4d2e',
          600: '#e63a1c',
          700: '#b82c13',
        },
        success: {
          400: '#34d399',
          500: '#10b981',
        },
        error: {
          400: '#f87171',
          500: '#ef4444',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Inter Tight"', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        blink: 'blink 1.2s steps(2, start) infinite',
        marquee: 'marquee 36s linear infinite',
        playhead: 'playhead 9s linear infinite',
        'spin-slow': 'spin 14s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        blink: {
          to: { visibility: 'hidden' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        playhead: {
          '0%': { left: '0%' },
          '100%': { left: '100%' },
        },
      },
    },
  },
  plugins: [],
};
