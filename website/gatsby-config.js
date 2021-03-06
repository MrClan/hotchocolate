module.exports = {
  siteMetadata: {
    title: `ChilliCream GraphQL`,
    description: `We're building the ultimate GraphQL platform`,
    author: `Chilli_Cream`,
    baseUrl: `https://chillicream.com`,
    topnav: [
      {
        name: `Platform`,
        link: `/platform`,
      },
      {
        name: `Docs`,
        link: `/docs/hotchocolate/getting-started`,
      },
      {
        name: `Blog`,
        link: `/blog`,
      },
      {
        name: `Shop`,
        link: `https://shop.chillicream.com`,
      },
    ],
    tools: {
      github: `https://github.com/ChilliCream/hotchocolate`,
      slack: `https://join.slack.com/t/hotchocolategraphql/shared_invite/enQtNTA4NjA0ODYwOTQ0LTViMzA2MTM4OWYwYjIxYzViYmM0YmZhYjdiNzBjOTg2ZmU1YmMwNDZiYjUyZWZlMzNiMTk1OWUxNWZhMzQwY2Q`,
      twitter: `https://twitter.com/Chilli_Cream`,
    },
  },
  pathPrefix: "/hotchocolate", // todo: must be removed before we go online
  plugins: [
    `gatsby-plugin-ts`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-react-redux`,
      options: {
        pathToCreateStoreModule: `./src/state`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `docs`,
        path: `${__dirname}/src/docs`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /images\/.*\.svg/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `chillicream`,
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-reading-time`,
          `gatsby-remark-mermaid`,
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              showLineNumbers: false,
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Roboto"],
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ChilliCream GraphQL`,
        short_name: `ChilliCream`,
        start_url: `/`,
        background_color: `#f40010`,
        theme_color: `#f40010`,
        display: `standalone`,
        icon: `src/images/chillicream-favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-72800164-1",
        anonymize: true,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
