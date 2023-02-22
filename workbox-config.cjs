module.exports = {
	globDirectory: 'dist/',
	globPatterns: [
		'**/*.{png,jpg,svg,css,js,ico,html,webmanifest}'
	],
	swDest: 'dist/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};