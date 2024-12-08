/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // এখানে dark mode class সিলেক্ট করো
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}