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

        'main-title-color': 'rgba(52, 52, 52, 1)',
        'main-subtitle-color': 'rgba(115, 128, 141, 1)',
        'main-description-color': 'rgba(0, 0, 0, 0.8)',
        'main-background-color': 'rgba(255, 255, 255, 1)',
        'main-block-title-color': 'rgba(84, 84, 84, 1)',


        'misc-primary-color': 'rgba(255, 255, 255, 1)',
        'misc-secondary-color': 'rgba(206, 202, 202, 1)',

        'page-backgound-top-gradient': 'rgba(3, 56, 244, 0.71)',
        'page-backgound-mid-gradient': 'rgba(111, 47, 225, 0.7491)',
        'page-backgound-bottom-gradient': 'rgba(224, 37, 206, 0.79)',
      }
    },
  },
  plugins: [],
}
