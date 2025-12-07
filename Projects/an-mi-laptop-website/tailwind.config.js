/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#6ee7b7',
          DEFAULT: '#10b981',
          dark: '#047857',
        },
      },
    },
  },
  plugins: [],
};
