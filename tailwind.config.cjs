/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html'],
	theme: {
		fontFamily: {
			ubuntu: 'Ubuntu, sans-serif',
		},
		extend: {},
	},
	plugins: [require('@tailwindcss/forms')],
};
