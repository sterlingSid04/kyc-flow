/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Noto Sans', 'sans-serif'], // Adds Noto Sans as the default sans-serif font
			},
			colors: {
				customBlue: '#052F5F',
			},			
		},
	},
	plugins: [],
};

