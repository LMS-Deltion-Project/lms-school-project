/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}",
  ],
  theme: {
    extend: {
      screens: {
        'xs':{max:'600px'},
      },
      colors: {
        homestyleblue: '#028af8',
      },
      backgroundImage: {
        'home': "url('/home.jpg')",
        'logo': "url('/logo.png)",
      },
    },
  },
  plugins: [],
}
