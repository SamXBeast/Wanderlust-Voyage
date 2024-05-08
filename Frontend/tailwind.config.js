/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif', 'Nunito-sans'],
      },
      flexGrow: {
        '3' : 3,
      },
      flexBasis: {
        '3' : 3,
      },
      flex: {
        '3' : 3,
      },
      flexShrink: {
        '3' : 3,
      }
    },
  },
  plugins: [],
}

