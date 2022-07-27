const postcssJitProps = require("postcss-jit-props")
const postcssPresetEnv = require("postcss-preset-env")
const OpenProps = require("open-props")

module.exports = {
	plugins: [
		postcssPresetEnv({
			stage: 0,
			features: {
				'logical-properties-and-values': false, 
        'prefers-color-scheme-query': false, 
        'gap-properties': false,
        'custom-properties': false,
        'dir-pseudo-class': false,
        'focus-within-pseudo-class': false,
        'focus-visible-pseudo-class': false,
        'color-functional-notation': false,
				"custom-media-queries": {
					importFrom: [
						"./node_modules/open-props/src/props.media.css",
						// "./src/styles/common/_media.css",
					],
				},
			},
			autoprefixer: true,
		}),
		postcssJitProps(OpenProps),
	],
}
