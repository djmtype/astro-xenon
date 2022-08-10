import { defineConfig } from 'astro/config';


import sitemap from "@astrojs/sitemap";

import { astroImageTools } from "astro-imagetools";

import mdx from '@astrojs/mdx';

import compress from "astro-compress";


// https://astro.build/config
export default defineConfig({
	site: "https://astro-xenon.netlify.app",
	
	vite: {
    plugins: [
    ],
    ssr: {
      external: ["svgo"],
    }, // logLevel: 'silent' // while I'm working on JSON files!
    css: {
      devSourcemap: true,
    },
  },

  markdown: {
    drafts: true,
    // Can be 'shiki' (default), 'prism' or false to disable highlighting
    syntaxHighlight: "shiki",
     shikiConfig: {
       theme: 'css-variables' // wrap: true,
     }

  },
  trailingSlash: 'never',

  experimental: {
    integrations: true,
  },
  integrations: [
    sitemap(),
    mdx(),
    compress({
      img: false,
      css: false,
			// css: true,
			// html: true,
			// js: true,
		}),
    astroImageTools,
  ],
});
