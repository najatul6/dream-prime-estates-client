/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "dark-yellow":"#FC0",
        "dark-blue":"#08183b",
      }
    },
  },
  plugins: [require("daisyui")],
}

