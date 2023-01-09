import { graphql, useStaticQuery } from "gatsby"

const UseSiteMetadata = () => {
  return useStaticQuery(graphql`
      query {
          site {
              siteMetadata {
                  title
                  siteUrl
                  description
                  author
                  motto
                  github
                  email
              }
          }
          allMdx {
              nodes {
                  excerpt
                  frontmatter {
                      title
                      tag
                      slug
                      date(formatString: "YYYY-MM-DD")
                  }
              }
          }
      }
  `)
}

export default UseSiteMetadata