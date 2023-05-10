/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
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
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

