/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'],
      },
      boxShadow: {
        "profile": "14px 22px 0px 6px #e4013b"
      },
      colors: {
        primary: {
          DEFAULT: "#e4013b",
          '50': '#fff0f1',
          '100': '#ffe1e4',
          '200': '#ffc8d0',
          '300': '#ff9ba9',
          '400': '#ff637d',
          '500': '#ff2d54',
          '600': '#f40a40',
          '700': '#e4013b',
          '800': '#ad0435',
          '900': '#940735',
        },
      }
    },

  },
  plugins: [],
}