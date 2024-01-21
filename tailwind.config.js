/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {},
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			'indigo': '#2A4BFA',
			'yellow': '#FFBB00',
			'white': '#FFFFFF',
			'lightgray': '#FAFAFA',
			'darkgray': '#4C4C4C',
			'gray': '#EEEEEE',
		}
	},
	plugins: [],
}

