/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Enable dark mode with 'class' strategy
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sans:['Roboto', 'sans-serif'],
      },
      gridTemplateColumns:{
        '70/30': '70% 28%',
      },
    },
  },
  plugins: [],
}
