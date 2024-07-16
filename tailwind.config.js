/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    
    extend: {
      height:{
        'hero': 'calc(100vh - 72px)',
      },
      fontFamily:{
        'comic':['Comic Reliefb'],
        'dmsans':["DM Sans"],
      },
    },
  },
  plugins: [],
}

