/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
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
  plugins: [
    // require('daisyui'),
  ],
  daisyui: {
    themes: ["light", "dark", "cupcake","halloween",],
  },
}

