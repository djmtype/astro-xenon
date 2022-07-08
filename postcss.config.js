const postcssPresetEnv = require('postcss-preset-env');


module.exports = {
	plugins: [
		postcssPresetEnv({
		  stage: 0,
			features: {
				'custom-media-queries': {
					importFrom: 'src/styles/common/_media-queries.css'
				}
			},
		  autoprefixer: true
		})
	],
};
