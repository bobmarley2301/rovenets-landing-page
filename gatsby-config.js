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
    `gatsby-plugin-sitemap`,
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
        name: `locales`,
        path: `${__dirname}/locales`,
      },
    },
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: `locales`,
        languages: [`uk`, `en`],
        defaultLanguage: `uk`,
        siteUrl: `https://rovenets.vercel.app`,
        i18nextOptions: {
          interpolation: {
            escapeValue: false,
          },
          keySeparator: false,
          nsSeparator: false,
        },
      },
    },
  ],
};
