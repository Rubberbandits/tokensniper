module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
	colors: {
		'black': '#010C13',
		'onyx': '#3A3B40',
		'orange': '#FB8B24',
		'cadet': '#5D737E',
		'white': '#FCFCFC',
	},
	backgroundColor: theme => ({
	 ...theme('colors'),
	 'primary': '#3A3B40',
	})
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
