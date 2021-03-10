const path = require('path');

module.exports = {
  siteMetadata: {
    title: `Linha do tempo da #VazaJato`,
    description: `Página listando todas as reportagens da #VazaJato.`,
    author: `@davitferreira`,
    siteUrl: `https://www.vazajato.me`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `/src/images`),
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-react-svg',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `VazaJato.me`,
        short_name: `vazajato`,
        start_url: `/`,
        background_color: `#fafafa`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `src/images/telegram-icon.png`,
      },
    },
    `gatsby-plugin-remove-serviceworker`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: path.join(__dirname, `/src/data/`),
      },
    },
  ],
};
