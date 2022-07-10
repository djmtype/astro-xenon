---
title: This is Astro Xenon
date: 
  published: 2022-07-07
	updated: 2022-07-10
setup: |
  import Callout from '@components/Callout.astro'
---

# Welcome to [Astro Xenon](https://astro-xenon.netlify.app)

## ⛺ Setup
1. Clone this project:  
[https://github.com/djmtype/astro-xenon.git](https://github.com/djmtype/astro-xenon.git)
2. Run `npm install` or use your favorite build tool. 
3. Enjoy!

## 🚀 Project Structure

Inside the Astro Xenon project, you'll see the following folders and files:

```
/
├── public/
│   ├── fonts/
│   ├── images/
│   └── rss/
├── src/
│   ├── components/
│   │   ├── global/
│   ├── data/
│   ├── demo/
│   ├── layouts/
│   ├── pages/
│   │   └── blog/
│   └── styles/
├── astro.config.mjs
├── package.json
└── postcss.config.js
```
Xenon is an opensource dark-first theme for Astro. Its color palette is based around the [Tomorrow theme](https://github.com/chriskempson/tomorrow-theme). 

Xenon contains a few other plugins from the community like [astro-imagetools](https://github.com/RafidMuhymin/astro-imagetools#readme) and [astro-icon](https://github.com/natemoo-re/astro-icon#readme). 

## 📖 Settings / Instructions

### General Info / Menu 
General site info and main navigation items can be managed via `src/data/site.json`

### RSS Feed
RSS has been pre-configured based on any markdown file placed within `src/pages/blog`. Be sure to configure your site's feed information in `src/pages/feed.xml.js`. 

Postscript, adjust the `site` property value found in `astro.config.mjs` 

### Styling 
Sorry, no Tailwinds. No Sass. 

This theme utilizes [PostCSS Env](https://preset-env.cssdb.org/) to accomplish Sass-like things such as custom media queries, css file imports, and nesting.

CSS custom properties (or variables) play a big part. 

- All color properties are located within the `src/styles/schemes` directory
- All other properties reside in `src/styles/common/_variables.css` 

The global gray scale is adaptive, based on the controls below. 

```css
/* Xenon's Default Background */
:root {
--color-primary-h: 205;
--gray-h: var(--color-primary-h);
--gray-s: 5%;
--gray-l: 90%;
--gray-increment: 10%;
}
```

These values can be adjusted separately for both `day` and `night` schemes inside the `src/styles/schemes` directory. 

<Callout type="info"> 
**Question:** What does *adaptive* grayscale even mean?  
**Answer:** Basically, you can tint your grays. *Be cautious about color accessibility.*
</Callout>


### Astro's Instructions 

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components or layouts.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Installs dependencies                        |
| `npm run dev`     | Starts local dev server at `localhost:3000`  |
| `npm run build`   | Build your production site to `./dist/`      |
| `npm run preview` | Preview your build locally, before deploying |

## 👀 Want to learn more about Astro?

Feel free to check [Astro's documentation](https://docs.astro.build) or jump into Astro's [Discord server](https://astro.build/chat).

