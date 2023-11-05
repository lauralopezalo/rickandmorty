/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ], 
  theme: {
    extend: {
      colors: {
        'myblack': '#0D0D0D',
        'mywhite': '#F0F2EB',
        'lime': '#A7CB54',
        'green': '#5CAD4A',
      },
    },
  },
  plugins: [],
}

