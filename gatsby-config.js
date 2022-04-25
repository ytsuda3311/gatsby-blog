/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: "My Blog",
    description: "Gatsbyで作成したブログサイトです。",
    author: "津田 侑汰"
  },
  /* Your site config here */
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_API_KEY,
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // commonmark: true,
        footnotes: true,
        // pedantic: true,
        gfm: true,
        plugins: [],
      }
    },
  ],
}
