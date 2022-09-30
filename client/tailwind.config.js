/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#ffffff',

          secondary: '#000000',

          accent: '#999999',

          'red': '#ff8080',

          'yellow': '#ffff99',

          'green': '#99ffcc',

          'blue': '#cceeff',

          'purple': '#ddccff',

          'pink': '#ffcad3',

          'base-100': '#ffffff',

          'base-200': '#f7f9fa',

          'base-300': '#15181c',

          info: '#3ABFF8',

          success: '#78dcca',

          warning: '#FBBD23',

          error: '#F87272',
        },
      },
    ],
  },
  theme: {
    colors: {},
    extend: {},
  },
  plugins: [require('daisyui')],
};
