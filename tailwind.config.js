/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      colors: {
        primary : 'rgb(31 41 55);'
      },
      fontFamily: {
        primary: 'courier-prime-bold',
        merri: 'merriweather-sans',
        merri300: 'merriweather-300',
      }
    },
  },
  plugins: [],
}