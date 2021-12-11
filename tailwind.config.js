module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          gray: '#C4C4C4',
          green: '#1ebaba',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};
