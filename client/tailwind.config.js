const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
	colors: {
		'onyx': '#3A3B40',
		'orange': '#FB8B24',
		'cadet': '#5D737E',
		'wintergreen': '#5296A5',
		black: colors.black,
		white: colors.white,
		gray: colors.trueGray,
		indigo: colors.indigo,
		red: colors.rose,
		yellow: colors.amber,
	},
	backgroundColor: theme => ({
	 ...theme('colors'),
	})
  },
  variants: {
    extend: {},
  },
  plugins: [
	// ...
	require('@tailwindcss/forms'),
	require('daisyui'),
  ],
}
