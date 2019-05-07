module.exports = {
  siteMetadata: {
    title: `Ceritanya Developer Podcast`,
    description: `Developer inspiratif bercerita tentang bagaimana mereka memulai menjadi developer.`
  },
  plugins: [
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `episodes`,
        path: `${__dirname}/src/episodes`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`
      }
    },
    `gatsby-plugin-postcss`
  ]
};
