import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    title: `whatsoever`,
    siteUrl: `https://www.whyyy.net/`,
    description: 'A blog recording my daily learning',
    author: 'yy chen',
    motto: 'Righty Tighty, Lefty Loosey',
    github: 'https://github.com/yyycc',
    email: 'whatsoever_yy@163.com',
  },
  // More easily incorporate content into your pamges through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      resolve: `gatsby-plugin-valine`,
      options: {
        appId: `U16yUflAALySICZhsJiwmobC-gzGzoHsz`,
        appKey: `SuQzXF7zopGW41PIraZdurG3`,
        avatar: `robohash`,
      },
    },
    "gatsby-plugin-image",
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "blog",
        "path": `${__dirname}/blog`
      },
      __key: "pages"
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `whatsoever-2`
      }
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-sass",
    "gatsby-plugin-sitemap",
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-code-titles`,
            options: {
              className: 'whatsoever-code-title'
            }
          },
          `gatsby-remark-autolink-headers`,
          {
            resolve: 'gatsby-remark-code-buttons',
            options: {
              buttonContainerClass: `whatsoever-button-container-class`,
              buttonClass: `whatsoever-button-class`,
              buttonText: `Copy`,
            }
          },
          // `gatsby-remark-grid-tables`,
          // {
          //   resolve: `gatsby-remark-figure-caption`,
          //   options: {
          //     figureClassName: 'whatsoever-figure'
          //   },
          // },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
              showCaptions: true,
            },
          },
          `gatsby-remark-gifs`,
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
              languageExtensions: [
                {
                  language: "superscript",
                  extend: "javascript",
                  definition: {
                    superscript_types: /(SuperType)/,
                  },
                  insertBefore: {
                    function: {
                      superscript_keywords: /(superif|superelse)/,
                    },
                  },
                },
              ],
              prompt: {
                user: "root",
                host: "localhost",
                global: false,
              },
              escapeEntities: {},
            },
          }
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Whatsoever`,
        short_name: `whatsoever`,
        start_url: `/`,
        background_color: `#ffffff`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        theme_color: `#8a4baf`,
        display: `minimal-ui`,
        icon: 'src/images/favicon.jpeg',
        icons: [
          {
            src: `src/images/maskable_icon_x192.png`,
            sizes: `192x192`,
            type: `image/png`,
            purpose: `any maskable`
          },
          {
            src: `src/images/maskable_icon_x512.png`,
            sizes: `512x512`,
            type: `image/png`,
            purpose: `any maskable`
          },
        ]
      }
    }, {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/about/`, `/blog/*`],
      },
    },
  ]
}

export default config
