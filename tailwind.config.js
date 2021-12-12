module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
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
  plugins: [require('@tailwindcss/aspect-ratio')],
};
