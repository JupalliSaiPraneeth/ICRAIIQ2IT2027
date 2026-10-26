/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#fb9200',
          50: '#fff8ed',
          100: '#ffeed4',
          200: '#ffdaa8',
          300: '#ffbf71',
          400: '#ff9a33',
          500: '#fb9200',
          600: '#dc6d00',
          700: '#b44e02',
          800: '#903d0a',
          900: '#75330e',
          glow: 'rgba(251, 146, 0, 0.4)',
        },
        navy: {
          950: '#060911',
          900: '#0a0f1d',
          850: '#0f172a',
          800: '#141e33',
          700: '#1e293b',
          600: '#334155'
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace']
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'quantum-glow': 'radial-gradient(circle at 50% 50%, rgba(251, 146, 0, 0.15) 0%, transparent 70%)',
      }
    },
  },
  plugins: [],
}
