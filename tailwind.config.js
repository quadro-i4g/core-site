const aspectRatio = require('@tailwindcss/aspect-ratio');
// eslint-disable-next-line import/no-extraneous-dependencies
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      xs: '475px',
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        primary: {
          gray: 'rgb(239 239 239)',
          green: '#1ebaba',
        },
      },
      animation: {
        fade: 'fadeInBottom 0.5s linear',
      },

      keyframes: {
        fadeInBottom: {
          '0%': {
            opacity: 0,
            transform: 'translateY(100%)',
          },
          '100%': {
            opacity: 1,
          },
        },
      },
    },
  },
  plugins: [aspectRatio],
};
