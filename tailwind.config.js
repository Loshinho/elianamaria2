/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./App.tsx",
    "./index.tsx",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./context/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Lato"', 'sans-serif'],
      },
      colors: {
        nude: {
          50: '#FAF8F5',
          100: '#FAF8F5',
          200: '#DFDACF',
          300: '#DFDACF',
          400: '#A3968D',
          700: '#A3968D',
          800: '#4D403A',
          900: '#262626',
        },
        gold: {
          50: '#FAF8F5',
          100: '#FAF8F5',
          200: '#DFDACF',
          300: '#A3968D',
          400: '#A3968D',
          500: '#4D403A',
          600: '#4D403A',
        },
        rose: {
          50: '#FAF8F5',
          100: '#DFDACF',
          200: '#DFDACF',
          300: '#A3968D',
          400: '#A3968D',
          500: '#4D403A',
          900: '#4D403A',
        },
        stone: {
          100: '#DFDACF',
          300: '#A3968D',
          500: '#A3968D',
          600: '#4D403A',
          700: '#4D403A',
          800: '#262626',
        }
      }
    }
  },
  plugins: [],
}