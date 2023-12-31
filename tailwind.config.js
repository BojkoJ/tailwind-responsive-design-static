/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'], //zde se řekne tailwindu kde hledat ulility classy
  theme: {
    screens:{ //ve screens si nadefinujeme šířky displeje pro záchytné body responzivity
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: { //v colors si nadefinujeme defaultní barvy
        brightRed: 'hsl(12, 88%, 59%)',
        brightRedLight: 'hsl(12, 88%, 69%)',
        brightRedSupLight: 'hsl(12, 88%, 95%)',
        darkBlue: 'hsl(228, 39%, 23%)',
        darkGrayishBlue: 'hsl(227, 12%, 61%)',
        veryDarkBlue: 'hsl(223, 12%, 13%)',
        veryPaleRed: 'hsl(13, 100%, 96%)',
        veryLightGray: 'hsl(0, 0%, 96%)',
      }
    },
  },
  plugins: [],
}
