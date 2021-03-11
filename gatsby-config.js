const path = require('path');

const siteUrl = `https://www.vazajato.me`;

module.exports = {
  siteMetadata: {
    title: `Linha do tempo interativa da #VazaJato`,
    description: `Leia todo o conteúdo já publicado da #VazaJato incluindo matérias de diferentes veículos, áudios e tuítes.`,
    author: `@davitferreira`,
    siteUrl,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        noTrailingSlash: true,
        siteUrl,
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
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
