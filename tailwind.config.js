/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ], 
  theme: {
    extend: {
      colors: {
        'mydark': '#0D0D0D',
        'mylight': '#F0F2EB',
        'lime': '#ABFE00',
        'green': '#5CAD4A',
      },
    },
  },
  plugins: [],
}

