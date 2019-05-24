module.exports = {
  siteMetadata: {
    title: `Ceritanya Developer Podcast`,
    description: `Developer inspiratif bercerita tentang bagaimana mereka mulai menjadi developer.`
  },
  plugins: [
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1024
            }
          },
          `gatsby-remark-copy-linked-files`
        ]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `episodes`,
        path: `${__dirname}/src/episodes`
      }
    },
    `gatsby-plugin-postcss`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`
  ]
};
