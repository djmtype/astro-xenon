const postcssPresetEnv = require('postcss-preset-env');
// const postcssNesting = require('postcss-nesting');
// const postcssCustomMedia = require('postcss-custom-media');
// const postcssMediaRanges = require('postcss-media-minmax');
// const postcssImport = require('postcss-import');

module.exports = {
	plugins: [
		// postcssImport({ path: ['src'] }),
		postcssPresetEnv({
		  stage: 0,
			features: {
				'custom-media-queries': {
					importFrom: 'src/styles/common/_media-queries.css'
				}
			},
		  autoprefixer: true,
		  // features: {
		  //   'logical-properties-and-values': false,
		  //   'prefers-color-scheme-query': false,
		  //   'gap-properties': false,
		  //   'custom-properties': false,
		  //   'place-properties': false,
		  //   'not-pseudo-class': false,
		  //   'focus-visible-pseudo-class': false,
		  //   'focus-within-pseudo-class': false,
		  //   'color-functional-notation': false,
		  // },
		}),
		// postcssCustomMedia({
		// 	importFrom: [
		// 		{
		// 			customMedia: {
		// 				'--viewport-3xs': '(width >= 18rem)',
		// 				'--viewport-2xs': '(width >= 24rem)',
		// 				'--viewport-xs': '(width >= 36rem)',
		// 				'--viewport-sm': '(width >= 48rem)',
		// 				'--viewport-md': '(width >= 62rem)',
		// 				'--viewport-lg': '(width >= 75rem)',
		// 				'--viewport-xl': '(width >= 90rem)',
		// 				'--viewport-2xl': '(width >= 100rem)',

		// 				'--night': '(prefers-color-scheme: dark)',
		// 				'--day': '(prefers-color-scheme: light)',

		// 				'--motion': '(prefers-reduced-motion: no-preference)',

		// 				'--no-motion': '(prefers-reduced-motion: reduce)',
		// 			},
		// 		},
		// 	],
		// }),
		// postcssMediaRanges(),
		// postcssNesting(),
	],
};
