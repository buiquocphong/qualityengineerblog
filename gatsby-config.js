require(`dotenv`).config({
  path: `.env`,
})

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

module.exports = {
  siteMetadata: {
        // Used for the title template on pages other than the index site
        siteTitle: `Jerry Bui`,
        // Default title of the page
        siteTitleAlt: `Quality Engineer - Jerry-Bui-blog`,
        // Can be used for e.g. JSONLD
        siteHeadline: `Trang chia sẻ kiến thức về quản lý chất lượng`,
        // Will be used to generate absolute URLs for og:image etc.
        siteUrl: `https://qualityengineer.org`,
        // Used for SEO
        siteDescription: `Trang chia sẻ các kiến thức vế chất lượng, hệ thống quản lý chất lượng, quản lý quá trình. Ứng dụng các phần mềm như R và Minitab vào việc quản lý quá trình.`,
        // Will be set on the <html /> tag
        siteLanguage: `en`,
        // Used for og:image and must be placed inside the `static` folder
        siteImage: `/banner.jpg`,
        // Twitter Handle
        author: `@jerry_bui`,
        // Links displayed in the header on the right side
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      // See the theme's README for all available options
      options: {
        navigation: [
          {
            title: `Blog`,
            slug: `/blog`,
          },
          {
            title: `About`,
            slug: `/about`,
          },
        ],
        externalLinks: [
          {
            name: `Twitter`,
            url: `https://twitter.com/jerry_bui`,
          },
          {
            name: `Facebook`,
            url: `https://www.facebook.com/Quanlity-Engineer-105950921447520`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
          shortname: `qualityengineer`
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Quality Engineer - Jerry-Bui-blog`,
        short_name: `quality-engineer`,
        description: `Trang chia sẻ các kiến thức vế chất lượng, hệ thống quản lý chất lượng, quản lý quá trình. Ứng dụng các phần mềm như R và Minitab vào việc quản lý quá trình.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-styled-components`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
}
