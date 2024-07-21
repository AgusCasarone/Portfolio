/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {

        // The value indicates the darkness of the color
        // El valor indica qué tan ocuro es el color

        'main-title-color': '#',
        'main-subtitle-color': '#',
        'main-description-color': '#000000',
        'main-background-color': '#FFFFFF',


        'misc-primary-color': '#FFFFFF',
        'misc-secondary-color': '#CECACA',

        'page-backgound-top-gradient': 'rgba(3, 56, 244, 0.71)',
        'page-backgound-mid-gradient': 'rgba(111, 47, 225, 0.7491)',
        'page-backgound-bottom-gradient': 'rgba(224, 37, 206, 0.79)',
      }
    },
  },
  plugins: [],
}
