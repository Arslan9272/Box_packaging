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
          DEFAULT: '#f5f5dc',
          light: '#fdfdf5',
          dark: '#e5e5c0',
        },
      },
    },
  },
  plugins: [],
}