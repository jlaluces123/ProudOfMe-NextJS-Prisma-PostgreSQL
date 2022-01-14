module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      truncate: {
        lines: {
          3: '3',
          5: '5',
          8: '8',
        },
      },
    },
  },
  plugins: [require('tailwindcss-truncate-multiline')()],
};
