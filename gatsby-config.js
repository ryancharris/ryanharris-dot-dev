module.exports = {
  siteMetadata: {
    title: "ryanharris.dev",
    author: "Ryan Harris",
    description:
      "dev @ fauna. instructor @ egghead. organizer @ reactadelphia. streamer @ twitch.tv/ryan_c_harris.",
    siteUrl: "https://ryanharris.dev",
    socialInfo: {
      github: "ryancharris",
      linkedin: "ryancharris",
      twitter: "ryan_c_harris",
      twitch: "ryan_c_harris",
    },
    siteRoutes: [
      {
        url: "/",
        label: "blog",
      },
      {
        url: "/uses",
        label: "uses",
      },
      {
        url: "/resume",
        label: "cv",
      },
      {
        url: "/talks",
        label: "talks",
      },
    ],
  },
  plugins: [
    {
      resolve: "gatsby-theme-blog",
      options: {
        assetPath: "content/assets",
        contentPath: "content/blog",
        mdxOtherwiseConfigured: true,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content/blog`,
        name: "blog",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content/assets`,
        name: "assets",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages/`,
        name: "pages",
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "ryanharris.dev",
        short_name: "ryanharris.dev",
        description:
          "dev @ fauna. instructor @ egghead. organizer @ reactadelphia. streamer @ twitch.tv/ryan_c_harris.",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#009fb7",
        display: "minimal-ui",
        icon: "content/assets/favicon.jpg",
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        defaultLayouts: {
          blog: require.resolve("./src/templates/blog-post.js"),
          default: require.resolve("./src/templates/page-template.js"),
        },
        gatsbyRemarkPlugins: [
          "gatsby-remark-images",
          {
            resolve: "gatsby-remark-responsive-iframe",
            options: {
              wrapperStyle: "margin-bottom: 1.0725rem",
            },
          },
          'gatsby-remark-prismjs'
        ],
      },
    },
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: "gatsby-remark-responsive-iframe",
            options: {
              wrapperStyle: "margin-bottom: 1.0725rem",
            },
          },
          "gatsby-remark-copy-linked-files",
          "gatsby-remark-smartypants",
        ],
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
  ],
}
