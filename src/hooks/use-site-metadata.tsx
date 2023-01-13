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
      }
  `)
}

export default UseSiteMetadata