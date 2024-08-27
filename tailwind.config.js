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
      fontSize: {
        '14xl':'13rem'
      }
    },
  },
  plugins: [
    function ({ addComponents, theme }) {
      addComponents({
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
        '.bg-letter': {
          position: 'relative',
          overflow: 'hidden',
          '&:after': {
            opacity: '15%',
            zIndex: 20,
            position: 'absolute',
            top: 0,
            right: '500px',
            content: 'attr(data-letter)',
            fontFamily: theme('fontFamily.snell'),
            color: theme('colors.peach'),
            fontSize: '120vh',
            lineHeight: '100vh'
          }
        },
        // 'text-14xl': {
        //   fontSize: '13rem'
        // }
      });
    },
  ],
}