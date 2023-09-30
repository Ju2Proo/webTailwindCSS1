/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  darkMode: 'class',
  theme: {
  	container: {
  		center: true,
  		padding: '16px',
  	},
    extend: {
    	colors: {
    		primary: '#451a03',
    		secondary: '#d97706',
    		light: '#fed7aa',
    	},
    	screens: {
    		'2xl': '1320px',
    	},
    },
  },
  plugins: [],
}

