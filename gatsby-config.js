module.exports = {
  pathPrefix: '/talk-early-arcade-games',
  siteMetadata: {
    name: `Igor Ivlev`,
    title: `Early age of Arcade Games`,
    date: `March, 2020`
  },
  plugins: [
    `gatsby-plugin-layout`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `slides`,
        path: `${__dirname}/src/slides`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-copy-images`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 1920
            }
          },
          {
            resolve: `gatsby-plugin-prefetch-google-fonts`,
            options: {
              fonts: [
                {
                  family: `Roboto Mono`,
                  variants: [`400`]
                },
                {
                  family: `Montserrat`,
                  variants: [`400`]
                },
                {
                  family: `Bungee Shade`,
                  variants: [`400`]
                }
              ]
            }
          }
        ]
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`
  ]
}
