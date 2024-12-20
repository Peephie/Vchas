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

        'snell': ['Snell-Roundhand', 'serif'],
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
        'search': '40rem',
      },
      fontSize: {
        'clamp-s': 'clamp(20px, 3.5cqw, 36px)',
        'clamp-l': 'clamp(48px, 9cqw, 104px)',
        'clamp-xl': 'clamp(150px, 50cqw, 400px)',
        'clamp-xxl': 'clamp(150px, 75cqw, 380px)',
        '14xl': '13rem'
      },
      width: {
        'clamp-s': 'clamp(32px, 5cqw, 64px)',
      },
      height: {
        'clamp-l': 'clamp(48px, 9cqw, 104px)',
      },
      padding: {
        'clamp-s': 'clamp(24px, 2.5cqw, 40px)',
      },
      aspectRatio: {
        'card': '1.66',
      },
      scale: {
        '80' : '.8',
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

        // SCROLL
        '.scrollbar-hide-active': {
          'overflow-y': 'scroll',
          'height': '100%',
          '-webkit-overflow-scrolling': 'touch', 
          'scrollbar-width': 'none', 
          '-ms-overflow-style': 'none',
        },
        '.scrollbar-hide-active::-webkit-scrollbar': {
          display: 'none',
        },
        '.scrollbar-hide-inactive': {
          'overflow-y': 'hidden',
          'height': '100%',
          '-webkit-overflow-scrolling': 'touch', 
          'scrollbar-width': 'none', 
          '-ms-overflow-style': 'none',
        },
        '.scrollbar-hide-inactive::-webkit-scrollbar': {
          display: 'none', 
        },

        // WordsScrollView.jsx scrollbar 
        '.custom-scrollbar::-webkit-scrollbar': {
          width: '4px', 
        },
        '.custom-scrollbar::-webkit-scrollbar-track': {
          background: theme('colors.coral'), 
          borderLeft: '1px solid transparent', 
          borderRight: '1px solid transparent',
          backgroundClip: 'padding-box',
        },
        '.custom-scrollbar::-webkit-scrollbar-thumb:hover': {
          backgroundColor: theme('colors.peach'), 
        },
        '.custom-scrollbar::-webkit-scrollbar-button:end:increment': {
          height: '15vh',
          display: 'block',
          background: 'transparent',
        },

        '.variant-inverse .custom-scrollbar::-webkit-scrollbar-thumb': {
          backgroundColor: theme('colors.beige'), 
        },
        '.variant-base .custom-scrollbar::-webkit-scrollbar-thumb': {
          backgroundColor: theme('colors.cherry'), 
        },

        '.variant-inverse .custom-scrollbar::-webkit-scrollbar-track': {
          backgroundColor: theme('colors.coral'), 
        },
        '.variant-base .custom-scrollbar::-webkit-scrollbar-track': {
          backgroundColor: theme('colors.peach'), 
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
            lineHeight: '100vh',
          }
        },

        '.bg-letter-card': {
          // containerType: 'inline-size',
          position: 'relative',
          overflow: 'hidden',
          '&:after': {
            opacity: '15%',
            zIndex: 20,
            position: 'absolute',
            top: '0cqw',
            right: '20cqw',
            textAlign: 'right',
            content: 'attr(data-letter)',
            fontFamily: theme('fontFamily.snell'),
            fontWeight: 'bolder',
            color: theme('colors.peach'),
            fontSize: 'calc(100cqw / 1.5)',
            lineHeight: '1',
          }
        },

        '.container-type-inline': {
          containerType: 'inline-size',
        }
      });
    },
  ],
}