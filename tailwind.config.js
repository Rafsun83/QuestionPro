const plugin = require('tailwindcss/plugin');

const greenColor = '#18A87C';

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      none: 'transparent',
      black: '#202020',
      green: greenColor,
      deepGreen: '#148F69',
      gray: {
        400: '#9ca3af',
        DEFAULT: '#757575',
      },
      yellow: '#FBCD05',
      red: '#FF4A32',
      'light-green': '#1DC895',
      'light-gray': '#D6D6D6',
      white: '#FFFFFF',
      snow: '#F9F9F9',
      mintcream: '#F0FDF9',
      aquamarine: '#F4FAFA',
      'aquamarine-light': '#EAF0F0',
      darkaquamarine: '#C2F6E6',

      /** * star color ** */
      mediumseagreen: '#18A97D',
      yellowgreen: '#7AC143',
      coral: '#F5842D',
      gold: '#FCCE08',
      orangered: '#EF3F28',
      success: '#1FC253',
      danger: '#FF4A32',
      warning: '#FBCD05',
      lightsuccess: '#DFF4E9',
      lightdanger: '#F5E8E6',
      lightwarning: '#F5F5E1',
    },


   
  },
  plugins: [
    require('@tailwindcss/custom-forms'),
    
  ],
};
