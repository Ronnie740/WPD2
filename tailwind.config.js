/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
	content: ['../*.{html,js}', '/*.js', '/views/*.moustache'],
	theme: {
		extend: {
			backgroundImage: {
				login: 'url(/images/Mobile-login-Cristina.jpg)',
			},
			colors: {
				button: '#04fbeb',
			},
		},
	},
	plugins: [],
};
