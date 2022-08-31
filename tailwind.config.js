/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        header : "#54656f",
        statusRead : "#53bdeb",
        status : "#8696a0",
      }
    },
  },
  plugins: [],
}
