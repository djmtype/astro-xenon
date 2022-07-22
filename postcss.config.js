const postcssJitProps = require("postcss-jit-props")
const postcssPresetEnv = require("postcss-preset-env")
const OpenProps = require("open-props")

module.exports = {
	plugins: [
		postcssPresetEnv({
			stage: 0,
			features: {
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
