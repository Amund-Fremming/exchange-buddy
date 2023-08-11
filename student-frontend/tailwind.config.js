/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "d-green": "#264142",
        "d-pink": "#de5499",
        "l-white": "#f2ebe9",
        "l-pink": "#eddcd9",
      },
    },
  },
  plugins: [],
}
