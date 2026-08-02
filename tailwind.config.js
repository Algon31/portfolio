/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pcolor: '#B75A48',
        'pcolor-dull': '#b75a488b',
        scolor: '#E8ECD6',
        dark: {
          bg: '#0a0f1d',
          surface: '#111827',
          card: '#182032',
          border: '#243049',
        }
      },
      fontFamily: {
        urbanist: ['Urbanist', 'sans-serif'],
        sans: ['Urbanist', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
