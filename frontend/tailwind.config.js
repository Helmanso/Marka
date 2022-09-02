/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        bag : {
          default : '#F4F4F4',
          def : '#177B57'
        }
      }
    },
  },
  plugins: [],
}