/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      homestyleblue: '#028af8',
    },
    extend: {
      backgroundImage: {
        'home': "url('/home.jpg')",
        'logo': "url('/logo.png)",
      },
    },
    screens: {
      'xs':{max:'600px'},
      ...defaultTheme.screens,
    },
  },
  plugins: [],
}
