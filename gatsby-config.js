module.exports = {
  // Customize your site metadata:
  siteMetadata: {
    title: `MetaGame`,
    author: `@MetaFam`,
    description: `🐙 A Massive Online Coordination Game.`,
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/metafam`,
      },
      {
        name: `github`,
        url: `https://github.com/MetaFam`,
      },
    ],
  },
  plugins: [
    'gatsby-plugin-theme-ui',
    'gatsby-plugin-react-helmet',
    `gatsby-transformer-sharp`,
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/layout`),
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`IBM Plex Mono\:400`, `Aldrich\:400`, `Press Start 2P\:400`],
        display: 'swap',
      },
    },
  ],
};
