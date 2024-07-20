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

				'snell-bt-bold': ['SnellBT-Bold', 'sans-serif'],
				'snell-bt-regular': ['SnellBT-Regular', 'sans-serif'],
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
			}
		},
  },
  plugins: [],
}