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
    image: `/brEflag.jpg`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    `gatsby-plugin-sitemap`,
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
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `white`,
        // Disable the loading spinner.
        showSpinner: false,
      },
    },
    // {
    //   resolve: `gatsby-plugin-google-adsense`,
    //   options: {
    //     publisherId: `ca-pub-2008019372085379`,
    //   },
    // },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-XSZGB754QJ", // Google Analytics / GA
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          optimize_id: "OPT_CONTAINER_ID",
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: ["/preview/**", "/do-not-track/me/too/"],
        },
      },
    },
  ],
};
