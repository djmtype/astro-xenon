import { defineConfig } from "astro/config"
import image from '@astrojs/image'
import sitemap from "@astrojs/sitemap"
import { astroImageTools } from "astro-imagetools"
import mdx from "@astrojs/mdx"
// import compress from "astro-compress"
// import critters from "astro-critters"
import {remarkAstroLocalImages} from './remark-plugins/remark-astro-markdown-local-images.mjs'


// https://astro.build/config
export default defineConfig({
	site: "https://astro-xenon.netlify.app",
	vite: {
		plugins: [],
		ssr: {
			external: ["svgo"],
		},
		// logLevel: 'silent' // while I'm working on JSON files!
		css: {
			devSourcemap: true,
		},
	},
	markdown: {
		drafts: true,
		remarkPlugins: [remarkAstroLocalImages()], // <- Important
    extendDefaultPlugins: true,
	
		
	//	extendDefaultPlugins: true,
	
		// Can be 'shiki' (default), 'prism' or false to disable highlighting
		syntaxHighlight: "shiki",
		shikiConfig: {
			theme: "css-variables", // wrap: true,
		},
	},
	// trailingSlash: "never",
	// experimental: {
	// 	integrations: true,
	// },
	integrations: [
		sitemap(),
		mdx(),
		// critters({
		// 	logLevel: "error",
		// 	reduceInlineStyles: false,
		// 	compress: false,
		// }),
		// compress({
		// 	// img: false,
		// 	// css: false, 
		// 	// js: false
		// 	// css: true,
		// 	// html: true,
		// 	// js: true,
		// }),
		image(),
		astroImageTools
	],
})
