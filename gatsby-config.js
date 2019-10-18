module.exports = {
  siteMetadata: {
    title: `Linha do tempo da #VazaJato`,
    description: `Página listando todas as reportagens da #VazaJato.`,
    author: `@davitferreira`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
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
        icon: `src/images/telegram-icon.png`
      }
    },
    `gatsby-plugin-remove-serviceworker`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`
      }
    }
  ]
};
