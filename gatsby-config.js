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
        url: "/talks",
        label: "talks",
      },
      {
        url: "/resume",
        label: "cv",
      },
    ],
  },
  plugins: [
    {
      resolve: "gatsby-theme-blog",
      options: {
        assetPath: `${__dirname}/content/assets`,
        contentPath: `${__dirname}/content/blog`,
        mdxOtherwiseConfigured: true,
        prismPreset: 'dracula'
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
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/mdx`,
        name: "mdx",
      },
    },
    {
      resolve: "gatsby-plugin-page-creator",
      options: {
        path: `${__dirname}/src/mdx`,
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "ryanharris.dev",
        short_name: "ryanharris.dev",
        description:
          "instructor @ egghead. organizer @ reactadelphia. streamer @ twitch.tv/ryan_c_harris.",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#009fb7",
        display: "minimal-ui",
        icon: "content/assets/favicon.jpg",
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
      extensions: [".mdx"],
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
        ],
      },
    },
    "gatsby-plugin-react-helmet",
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
