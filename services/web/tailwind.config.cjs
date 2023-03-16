/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home': "url('/home.jpg')",
        'logo': "url('/logo.png)",
      }
    },
  },
  plugins: [],
}
