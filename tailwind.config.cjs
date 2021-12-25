const defaultTheme = require('tailwindcss/defaultTheme');

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				purple: {
					DEFAULT: '#a992cf',
					light: '#cbbae8',
					dark: '#7e70bc',
				},
				pink: {
					DEFAULT: '#cf92c5',
				},
				salmon: {
					DEFAULT: '#df828c',
					light: '#e8a6a4',
				},
				gold: {
					DEFAULT: '#edb484',
					light: '#f3c77f',
				},
			},
			fontFamily: {
				sans: ['Poppins', ...defaultTheme.fontFamily.sans],
			},
		},
	},

	plugins: [],
};

module.exports = config;
