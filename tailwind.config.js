/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}','./components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      width: {
        '128': '28rem'
      },
      height: {
        '128': '28rem'
      }
    },
  },
  plugins: [],
}

