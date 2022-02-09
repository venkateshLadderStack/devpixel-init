module.exports = {
  siteMetadata: {
    title: `Gatsby WordPress Starter`,
    description: `Kick off your next, great Gatsby project with this WordPress starter.`,
    author: `@tomphill`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `poppins\:300,400,500,700`,
          `source sans pro\:300,400,500,700`, // you can also specify font weights and styles
        ],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "G-ZB3DHX9RV6",
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    "gatsby-plugin-sass",
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#FBBF31`,
        theme_color: `#FBBF31`,
        display: `minimal-ui`,
        icon: `src/images/favicon-circle@2x.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: "http://www.ladderstack.team/devpixel/graphql",
      },
    },
  ],
}
