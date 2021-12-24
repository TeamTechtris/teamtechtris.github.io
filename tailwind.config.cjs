const defaultTheme = require('tailwindcss/defaultTheme');

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				purple: {
					DEFAULT: '#A992CF',
					dark: '#7E70BC',
				},
				pink: {
					DEFAULT: '#CF92C5',
				},
				salmon: {
					DEFAULT: '#DF828C',
					light: '#D89694',
				},
				gold: {
					DEFAULT: '#EDB484',
					light: '#F3C77F',
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
