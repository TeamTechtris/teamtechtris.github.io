const defaultTheme = require('tailwindcss/defaultTheme');

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				purple: {
					DEFAULT: '#a992cf',
					400: '#a992cf',
					100: '#f4f1f9',
					200: '#ded4ec',
					300: '#c7b9e0',
					500: '#9b7fc7',
					600: '#8563bb',
					700: '#6f4baa',
					800: '#5d3e8e',
					900: '#4a3271',
				},
				pink: {
					DEFAULT: '#cf92c5',
					400: '#cf92c5',
					100: '#f9f1f7',
					200: '#ecd4e8',
					300: '#e0b8d9',
					500: '#c77fbb',
					600: '#bb63ac',
					700: '#aa4b9a',
					800: '#8e3e81',
					900: '#713267',
				},
				salmon: {
					DEFAULT: '#df828c',
					400: '#df828c',
					100: '#fbeff0',
					200: '#f2ced2',
					300: '#eaaeb4',
					500: '#d96d78',
					600: '#d14d5a',
					700: '#c33241',
					800: '#a22a36',
					900: '#82212b',
				},
				gold: {
					DEFAULT: '#edb484',
					400: '#edb484',
					100: '#fcf4ed',
					200: '#f7deca',
					300: '#f2c8a6',
					500: '#e79c5f',
					600: '#e2863c',
					700: '#d57120',
					800: '#b15e1b',
					900: '#8e4c15',
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
