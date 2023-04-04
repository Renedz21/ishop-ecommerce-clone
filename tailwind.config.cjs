/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ishopOrange: "#fa8b0f",
        white: "#fff",
        lightTeal: "#43ac7a",
        darkGray: "#323232",
        black: "#5d5d5d",
      }
    },
  },
  plugins: [],
}
