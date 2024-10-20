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

        'main-title-color': {
          light: 'rgba(52, 52, 52, 1)',
          DEFAULT: 'rgba(245, 245, 245, 1)',
          dark: 'rgba(245, 245, 245, 1)'
        },
        'main-subtitle-color': {
          light: 'rgba(115, 128, 141, 1)',
          DEFAULT: 'rgba(200, 200, 200, 0.8)',
          dark: 'rgba(200, 200, 200, 0.8)'
        },
        'main-description-color': {
          light: 'rgba(0, 0, 0, 0.8)',
          DEFAULT: 'rgba(245, 245, 245, 0.8)',
          dark: 'rgba(245, 245, 245, 0.8)'
        },
        'main-background-color': {
          light: 'rgba(245, 245, 245, 1)',
          DEFAULT: 'rgba(84, 84, 84, 1)',
          dark: 'rgba(84, 84, 84, 1)'
        },
        'main-block-title-color': {
          light: 'rgba(84, 84, 84, 1)',
          DEFAULT: 'rgba(120, 120, 120, 1)',
          dark: 'rgba(120, 120, 120, 1)'
        },


        'misc-primary-color': 'rgba(245, 245, 245, 1)',
        'misc-secondary-color': 'rgba(206, 202, 202, 1)',
        'misc-higlight-color': 'rgba(196, 196, 196, 0.35)',

        'page-backgound-top-gradient': {
          light: 'rgba(3, 56, 244, 0.71)',
          DEFAULT: 'rgba(3, 25, 100, 0.71)',
          dark: 'rgba(3, 25, 100, 0.71)'
        },
        'page-backgound-mid-gradient': {
          light: 'rgba(111, 47, 225, 0.7491)',
          DEFAULT: 'rgba(50, 25, 112, 0.7491)',
          dark: 'rgba(50, 25, 112, 0.7491)'
        },
        'page-backgound-bottom-gradient': {
          light: 'rgba(224, 37, 206, 0.79)',
          DEFAULT: 'rgba(112, 20, 103, 0.79)',
          dark: 'rgba(112, 20, 103, 0.79)'
        },

        'detail': 'rgba(245, 245, 245, 1)',
        'detail-complementary': 'rgba(2, 12, 44, 0.316)',
        'detail-third': 'rgba(106, 89, 181, 0.701)',
      }
    },
  },
  plugins: [],
}
