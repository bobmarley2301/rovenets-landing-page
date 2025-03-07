module.exports = {
  siteMetadata: {
    title: `Rovenets - Handmade Bags & Backpacks`,
    description: `Унікальні handmade сумки та рюкзаки ручної роботи`,
    author: `Dmitro Yaremchuk`,
    siteUrl: `https://rovenets.vercel.app`,
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sitemap`,
  ],
};
