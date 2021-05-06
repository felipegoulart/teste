module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.vue',
  ],
  darkMode: false, // or 'media' or 'class'
  
  theme: {
    extend: {
      borderRadius: {
      '4xl': '2rem',
      },

      colors: {
        green: {
          'water-100': '#6CDABF',
          'water-200': '#80DDA5'
        }
      }
    },
  },
    
  variants: {
    extend: {
      opacity: ['disabled'],
      display: ['hover', 'focus']
    }
  },
  plugins: [],
}
