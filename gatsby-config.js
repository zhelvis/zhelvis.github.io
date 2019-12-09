module.exports = {
  siteMetadata: {
    siteUrl: 'https://zhelvis.github.io',
    author: {
      telegram: 'https://t.me/zhelvis',
      github: 'https://github.com/zhelvis',
      vk: 'https://vk.com/v.zhelvis',
      email: 'zhelvisvladimir@gmail.com',
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/config/translations`,
        name: `translations`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/about`,
        name: `about`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              quality: 100,
              maxWidth: 768,
              linkImagesToOriginal: false,
            },
          },
        ],
        plugins: [`gatsby-remark-images`],
      },
    },
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-json`,
    /*
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        policy: [{ userAgent: '*', disallow: '/' }],
      },
    },
    */
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-154200953-1`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Vladimir Zhelvis`,
        short_name: `Zhelvis`,
        start_url: `/`,
        background_color: `hsl(10,10%,98%)`,
        theme_color: `hsl(10,20%,20%)`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
