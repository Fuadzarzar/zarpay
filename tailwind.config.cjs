/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif'
      },

      boxShadow: {
        '3xl': '0px 0px 25px rgba(0, 0, 0, 0.03);'
      },
    },
  },
  plugins: [],
}