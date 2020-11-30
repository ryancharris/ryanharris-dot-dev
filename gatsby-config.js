module.exports = {
  siteMetadata: {
    title: `ryanharris.dev`,
    author: `Ryan Harris`,
    description: `dev @ fauna. organizer @ reactadelphia. streamer @ twitch.tv/ryan_c_harris. member of @thelivecoders.`,
    siteUrl: `https://ryanharris.dev`,
    socialInfo: {
      github: `ryancharris`,
      linkedin: `ryancharris`,
      twitter: `ryan_c_harris`,
      youtube: `https://www.youtube.com/playlist?list=PLCP3kvy3RyhRyre5F-S9-CL2vFea43I-W`,
      twitch: "ryan_c_harris",
    },
    social: [
      {
        name: `Twitter`,
        url: `https://twitter.com/gatsbyjs`,
      },
      {
        name: `GitHub`,
        url: `https://github.com/gatsbyjs`,
      },
    ],
    siteRoutes: [
      {
        url: `/`,
        label: `Blog`,
      },
      {
        url: `/uses`,
        label: `Uses`,
      },
      {
        url: `/resume`,
        label: `CV`,
      },
      {
        url: `/talks`,
        label: `Talks`,
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {
        basePath: `/`,
        prismPreset: `dracula`,
        mdxOtherwiseConfigured: true,
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
        path: `${__dirname}/content/assets`,
        name: `assets`,
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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ryanharris.dev`,
        short_name: `ryanharris.dev`,
        description:
          "dev @ fauna. instructor @ egghead. organizer @ reactadelphia. streamer @ twitch.tv/ryan_c_harris.",
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#009fb7`,
        display: `minimal-ui`,
        icon: `content/assets/favicon.jpg`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve("./src/templates/page-template.js"),
        },
        gatsbyRemarkPlugins: [
          `gatsby-remark-images`,
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
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
              wrapperStyle: `margin-bottom: 1.0725rem`,
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
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    // `gatsby-plugin-theme-ui`,
  ],
}
