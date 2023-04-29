/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				bluegreen: '#006884',
				navy: '#053D57',
				offwhite: '#F2F1EF',
				teal: '#97BCC7',
			},
		},
	},
	plugins: [],
}

// theme https://www.canva.com/colors/color-palettes/strong-and-curved/
