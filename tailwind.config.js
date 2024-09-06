/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        red:"#E50914",
      },
      backgroundColor:{
        black: "#141414",
      }
    },
  },
  plugins: [],
}