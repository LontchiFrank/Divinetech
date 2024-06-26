/**
 * @format
 * @type {import('tailwindcss').Config}
 */

const { nextui } = require("@nextui-org/theme");

module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./node_modules/@nextui-org/theme/dist/components/button.js",
		// or you can use a glob pattern (multiple component styles)
		// "./node_modules/@nextui-org/theme/dist/components/(button|snippet|code|input).js",
		"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
		},
		screens: {
			// xs: "242px",
			sm: "660px",
			// => @media (min-width: 640px) { ... }
			md: "	768px",
			lg: "1024px",
			// => @media (min-width: 1024px) { ... }

			xl: "1280px",
			// => @media (min-width: 1280px) { ... }
			"2xl": "1536px",
		},
	},
	darkMode: "class",
	plugins: [nextui()],
};
