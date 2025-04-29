/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        beige: {
          DEFAULT: '#DDD0C8',
          light: '#fdfdf5',
          dark: '#e5e5c0',
        },
      },
    },
  },
  plugins: [],
}