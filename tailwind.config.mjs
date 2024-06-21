/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
	  extend: {
		fontFamily: {
			sans: ['"Roboto Condensed"', 'sans-serif'],
		  },
		colors: {
		  transparent: 'transparent',
		  current: 'currentColor',
		  white: '#ffffff',
		  purple: '#3f3cbb',
		  midnight: '#121063',
		  metal: '#565584',
		  tahiti: '#3ab7bf',
		  silver: '#ecebff',
		  'bubble-gum': '#ff77e9',
		  bermuda: '#78dcca',
		  blue: '#1d4ed8',
		  isai: '#27272a',
		  mono: '#71717a',
		  hovb: '#1e40af',
		},
	  },
	},
	plugins: [],
  }
  