/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./pages/",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "*"
  ],
  theme: {
    extend: {
      fontFamily: {
        sansL: ['Robot', 'sans-serif']
      },
      gridTemplateColumns: {
        '70/30': '70% 28%'
      }
    },
  },
  plugins: [],
}

