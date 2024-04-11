/** @format */

module.exports = {
	// plugins: {
	// 	tailwindcss: {},
	// 	autoprefixer: {},
	// },
	plugins: [
		require("postcss-import"),
		require("tailwindcss/nesting")(require("postcss-nesting")),
		require("autoprefixer"),
		require("tailwindcss"),
	],
};
