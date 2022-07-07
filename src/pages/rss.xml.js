import rss from '@astrojs/rss';

const postImportResult = import.meta.globEager('./blog/*.md');
const posts = Object.values(postImportResult);

export const get = () => rss({
    title: 'Blog Title',
    description: 'Blog description',
    site: import.meta.env.SITE,
		items: posts.map((post) => ({
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      pubDate: post.frontmatter.date.published,
      link: post.url
    })),
    customData: `<language>en-us</language>`,
		stylesheet: '/rss/styles.xsl'
  });