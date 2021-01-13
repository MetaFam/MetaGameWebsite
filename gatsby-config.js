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
    'gatsby-plugin-remove-serviceworker',
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
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `IBM Plex Mono`,
            variants: [`regular 400`]
          },
          {
            family: `Aldrich`,
            variants: [`regular 400`]
          },
          {
            family: `Press Start 2P`,
            variants: [`regular 400`]
          },
        ],
      },
    }
  ],
};
