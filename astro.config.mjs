import ViteYaml from '@modyfi/vite-plugin-yaml';

import { defineConfig } from 'astro/config';

import sitemap from "@astrojs/sitemap";

import { astroImageTools } from "astro-imagetools";

// https://astro.build/config
export default defineConfig({
	site: "https://xenon.mtype.com",
	
	vite: {
    plugins: [
      ViteYaml()
    ],
    ssr: {
      external: ["svgo"],
    }, // logLevel: 'silent' // while I'm working on JSON files!
    css: {
      devSourcemap: true,
    },
  },

  markdown: {
    // Can be 'shiki' (default), 'prism' or false to disable highlighting
    syntaxHighlight: "shiki",
     shikiConfig: {
       theme: 'css-variables' // wrap: true,

     }

  },

  experimental: {
    integrations: true,
  },
  integrations: [
    sitemap(),
    astroImageTools,
  ],
});
