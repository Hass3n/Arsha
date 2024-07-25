/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1540px',
      // => @media (min-width: 1536px) { ... }
    },

    extend: {
      container:
      {
        center:true,
        padding:'2rem'
      },
      colors:
      {
        headcolor:'#37517E',
        
      },
      fontSize:
      {
        h1:'3rem'
      }
    },
  },
  plugins: [    require('@tailwindcss/typography'),
  ],
}

