/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'raleway': ['Raleway', 'sans-serif'],
        'raleway-italic': ['Raleway-Italic', 'sans-serif'],

        'cormorant-infant-bold': ['CormorantInfant-Bold', 'sans-serif'],
        'cormorant-infant-bold-italic': ['CormorantInfant-BoldItalic', 'sans-serif'],
        'cormorant-infant-italic': ['CormorantInfant-Italic', 'sans-serif'],
        'cormorant-infant-light': ['CormorantInfant-Light', 'sans-serif'],
        'cormorant-infant-light-italic': ['CormorantInfant-LightItalic', 'sans-serif'],
        'cormorant-infant-medium': ['CormorantInfant-Medium', 'sans-serif'],
        'cormorant-infant-medium-italic': ['CormorantInfant-MediumItalic', 'sans-serif'],
        'cormorant-infant-regular': ['CormorantInfant-Regular', 'sans-serif'],
        'cormorant-infant-semiBold': ['CormorantInfant-SemiBold', 'sans-serif'],
        'cormorant-infant-semiBold-italic': ['CormorantInfant-SemiBoldItalic', 'sans-serif'],

        'snell': ['Snell-Roundhand', 'serif']
      },
      colors: {
        'beige': '#FAF1EB',
        'peach': '#E5A599',
        'coral': '#D57F6E',
        'red': '#B63820',
        'cherry': '#97230D',
        'black': '#1E1C1E',
      },
      gridTemplateColumns: {
        '50/50': '50% 50%',
      },
      backgroundImage: {
        'gradient-beige-to-cherry': 'linear-gradient(to right, #FAF1EB 50%, #97230D 50%)',
      },
      minWidth: {
        'search': '40rem'
      },
    },
  },
  plugins: [
    function ({ addComponents, theme }) {
      addComponents({
        // THEME VARIANTS
        '.variant-base': {
          backgroundColor: theme('colors.beige'),
          color: theme('colors.cherry'),
        },
        '.variant-inverse': {
          backgroundColor: theme('colors.cherry'),
          color: theme('colors.beige'),
        },
        '.variant-beige-to-cherry': {
          backgroundImage: theme('backgroundImage.gradient-beige-to-cherry'),
        },
        
        // SEARCH 
        '.search-input': {
          fontFamily: theme('fontFamily.raleway'),
          fontSize: '1.875rem',
          lineHeight: '2.25rem',
          width: '24rem',
          padding: '0px 0px 10px 10px',
          marginRight: '5px',
          outline: '2px solid transparent',
          outlineOffset: '2px',
          borderBottomWidth: '2px',
        },
        '.text-search-word': {
          fontFamily: theme('fontFamily.raleway-italic'),
          fontSize: '4rem',
          lineHeight: '0.69',
        },

        //CARDS WORD_PAGES
        '.bg-letter': {
          position: 'relative',
          overflow: 'hidden',
          '&:after': {
            opacity: '15%',
            zIndex: 20,
            position: 'absolute',
            top: '-40px',
            right: '200px',
            textAlign: 'right',
            content: 'attr(data-letter)',
            fontFamily: theme('fontFamily.snell'),
            fontWeight: 'bolder',
            color: theme('colors.peach'),
            fontSize: '100vh',
            lineHeight: '100vh'
          }
        }
      });
    },
  ],
}