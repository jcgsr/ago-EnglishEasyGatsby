/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "English?! Easy...",
    description:
      "Site que reúne os principais tópicos da gramática inglesa referentes ao Ensino Fundamental Maior",
    siteUrl: "https://www.englisheasyfm.com.br",
    image: `./src/assets/img/brEflag.jpg`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `nono`,
        path: `${__dirname}/nono-mdx`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `nono`,
        path: `${__dirname}/oitavo-mdx`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `nono`,
        path: `${__dirname}/setimo-mdx`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `nono`,
        path: `${__dirname}/sexto-mdx`,
      },
    },
    `gatsby-plugin-mdx`,
  ],
};
