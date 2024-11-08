
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
      'light-green': '#1DC895',
      'light-gray': '#D6D6D6',
      white: '#FFFFFF',
      aquamarine: '#F4FAFA',
      'aquamarine-light': '#EAF0F0',
      darkaquamarine: '#C2F6E6',
    },


   
  },
  plugins: [
    require('@tailwindcss/custom-forms'),
    
  ],
};
