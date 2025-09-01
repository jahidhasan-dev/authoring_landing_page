/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `SDS Authoring Software | Professional Safety Data Sheet Creation`,
    description: `Create professional Safety Data Sheets (SDS) with our advanced authoring software. Stay compliant with global regulations and streamline your chemical safety documentation.`,
    author: `SDS Manager`,
    siteUrl: `https://sdsmanager.com/authoring`,
    keywords: `SDS authoring, safety data sheet creation, chemical compliance, MSDS software, chemical safety documentation`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `SDS Authoring Software`,
        short_name: `SDS Authoring`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#2563eb`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
  ],
}
