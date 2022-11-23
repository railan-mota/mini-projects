/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      pixel: ['VT323', 'monospace'],
      sans: ['Inter', 'sans-serif'],
      heading: ['Manrope', 'sans-serif'],
      hero: ['Syne Mono', 'monospace'],
      serif: ['Roboto Slab', 'serif'],
    },
    extend: {
      minHeight: {
        hero: 'calc(100vh - 152px)',
      },
      colors: {
        dark: {
          //slate
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        highlightDark: '#dc2626', // red-600
        highlightLight: '#e11d48', // rose-600
      },
    },
  },
  plugins: [],
};
