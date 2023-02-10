import { graphql, useStaticQuery } from "gatsby"
import { IMetadata } from "../components/data"

const UseSiteMetadata = (): IMetadata => {
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