/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'ibm': ['IBM Plex Sans', 'sans-serif'],
      },
      backgroundImage: {
        'bg-mobile': "url('../assets/bg-main-mobile.png')",
        'bg-tablet': "url('../assets/bg-main-tablet.png')",
        'bg-desktop': "url('../assets/bg-main-desktop.png')",
        'pattern-1': "url('../assets/bg-pattern-1.svg')",
        'pattern-2': "url('../assets/bg-pattern-2.svg')",
      },
    },
  },
  plugins: [],
}

