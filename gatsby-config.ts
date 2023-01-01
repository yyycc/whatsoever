import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `whatsoever`,
    siteUrl: `https://whatsoever.gatsbyjs.io/`,
    description: 'It is my blog called whatsoever',
    author: 'yy chen',
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: ["gatsby-plugin-sass", "gatsby-plugin-sitemap", "gatsby-plugin-mdx", "gatsby-plugin-image", "gatsby-plugin-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "blog",
      "path": `${__dirname}/blog`
    },
    __key: "pages"
  }]
};

export default config;
