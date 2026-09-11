/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        vexis: {
          green: '#00D26A',
          'green-bright': '#00E676',
          black: '#0B0B0B',
          'black-secondary': '#151515',
          card: '#1A1A1A',
          white: '#FFFFFF',
          'text-secondary': '#B0B0B0',
          border: '#292929',
        },
      },
      fontFamily: {
        sans: ['Raleway', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': ['clamp(2.5rem, 6vw, 5rem)', { lineHeight: '1.05', fontWeight: '800' }],
        'h2': ['clamp(2rem, 4.5vw, 3.25rem)', { lineHeight: '1.1', fontWeight: '700' }],
        'h3': ['clamp(1.5rem, 2.5vw, 1.875rem)', { lineHeight: '1.2', fontWeight: '700' }],
        'body': ['1.0625rem', { lineHeight: '1.7', fontWeight: '400' }],
      },
      animation: {
        'glow-breathe': 'glow-breathe 5s ease-in-out infinite',
        'float-slow': 'float-slow 6s ease-in-out infinite',
        'fade-up': 'fade-up 0.7s ease-out forwards',
        'shimmer': 'shimmer 3s linear infinite',
      },
      keyframes: {
        'glow-breathe': {
          '0%, 100%': { opacity: '0.5', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
};
