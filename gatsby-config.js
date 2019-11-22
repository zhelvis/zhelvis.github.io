module.exports = {
  siteMetadata: {
    siteUrl: 'https://zhelvis.github.io/',
    author: {
      telegram: 'https://t.me/zhelvis',
      github: 'https://github.com/zhelvis',
      vk: 'https://vk.com/v.zhelvis',
      email: 'zhelvisvladimir@gmail.com',
      phone: '+79771177563',
    },
  },
  plugins: [
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
        path: `${__dirname}/blog`,
        name: `blog`,
      },
    },
    `gatsby-plugin-mdx`,
    `gatsby-transformer-json`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        policy: [{ userAgent: '*', disallow: '/' }],
      },
    },
  ],
}
