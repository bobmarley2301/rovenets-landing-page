/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			fontFamily: {
				montserrat: ['Montserrat', 'sans-serif'],
				playfair: ['Playfair Display', 'serif'],
			},
			colors: {
				primary: {
					50: '#f9f5f2',
					100: '#f3eae4',
					200: '#e7d5c9',
					300: '#d4b5a3',
					400: '#bc8f77',
					500: '#a6735c',
					600: '#8c5c4a',
					700: '#704a3d',
					800: '#5c3d33',
					900: '#4d332c',
				},
			},
		},
	},
	plugins: [],
}
