module.exports = {
  siteMetadata: {
    title: `ryanharris.dev`,
    author: `Ryan Harris`,
    description: `dev @ fauna. co-organizer reactadelphia. write for logrocket. career changer. gritizen.`,
    siteUrl: `https://ryanharris.dev`,
    social: {
      github: `ryancharris`,
      linkedin: `ryancharris`,
      twitter: `ryan_c_harris`,
      youtube: `https://www.youtube.com/playlist?list=PLCP3kvy3RyhRyre5F-S9-CL2vFea43I-W`,
    },
    siteRoutes: [
      {
        url: `/about`,
        label: `About`,
      },
      {
        url: `/`,
        label: `Blog`,
      },
      {
        url: `/talks`,
        label: `Talks`,
      },
      {
        url: `/uses`,
        label: `Uses`,
      },
    ],
  },
  plugins: [
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
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-135453133-1`,
      },
    },
    // `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ryanharris.dev`,
        short_name: `ryanharris.dev`,
        description: 'dev @ fauna. co-organizer reactadelphia. write for logrocket. career changer. gritizen.',
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#009fb7`,
        display: `minimal-ui`,
        icon: `content/assets/favicon.jpg`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve("./src/templates/page-template.js"),
        },
        gatsbyRemarkPlugins: [`gatsby-remark-images`, `gatsby-remark-responsive-iframe`],
      },
    },
    `gatsby-plugin-theme-ui`,
  ],
}
