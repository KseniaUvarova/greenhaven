/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'ui-serif', 'Georgia', 'serif'],
      },
      colors: {
        green: {
          50: '#f0f9f1',
          100: '#dcf1de',
          200: '#bde4c2',
          300: '#93d19b',
          400: '#65b671',
          500: '#48a155',
          600: '#368342',
          700: '#2d6a4f',
          800: '#245440',
          900: '#1e4434',
        },
      },
    },
  },
  plugins: [],
};