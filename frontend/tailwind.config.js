/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./frontend/src/**/*.{html, js}"],
  theme: {
    extend: {
      img: {
      width : '2px',
      height: '2px',
      },
      fontFamily:{
        "haken": ['"Hanken Grotesk"', 'sans-serif']
      },
    },
  },
  plugins: [],
}

