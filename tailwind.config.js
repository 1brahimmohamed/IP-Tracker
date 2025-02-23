/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
      },
      colors: {
        'very-dark-gray':  "#2b2b2b",
        'dark-gray': "#969696",
      }
    },
  },
  plugins: [],
}
