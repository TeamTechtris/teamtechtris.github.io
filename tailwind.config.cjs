const defaultTheme = require('tailwindcss/defaultTheme');

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				purple: {
					DEFAULT: 'rgb(169 146 207)',
					dark: 'rgb(126 112 188)',
				},
				pink: {
					DEFAULT: 'rgb(237 146 197)',
				},
				salmon: {
					DEFAULT: 'rgb(223 130 140)',
					light: 'rgb(216 150 148)',
				},
				gold: {
					DEFAULT: 'rgb(237 180 132)',
					light: 'rgb(243 199 127)',
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
