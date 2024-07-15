/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
  theme: {
    extend: {
			fontFamily:{
				sans: ['Railway', 'sans-serif']
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

