/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        luxury: {
          bg: '#0B0B0A',
          bg2: '#141310',
          gold: '#D6B36A',
          goldLight: '#F1D99A',
          ivory: '#F7F3EA',
          bronze: '#8F7345',
        },
        // Remap the neutral/accent scales used throughout the existing
        // component classNames so the whole site retones onto the dark
        // luxury palette without touching every file's classNames.
        black: '#17140F',
        gray: {
          50: '#161512',
          100: '#1D1B16',
          200: '#2A2620',
          300: '#3D372B',
          400: '#A6935F',
          500: '#BFAE85',
          600: '#D3C4A0',
          700: '#F0EAD9',
          800: '#F7F3EA',
          900: '#FFFFFF',
        },
        yellow: {
          50: '#1C1810',
          100: '#241F14',
          200: '#332B19',
          300: '#8F7345',
          400: '#D6B36A',
          500: '#D6B36A',
          600: '#C9A055',
          700: '#C2A574',
          800: '#8F7345',
          900: '#3D2F17',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'spin-slow': 'spin 4s linear infinite',
        shimmer: 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
};
