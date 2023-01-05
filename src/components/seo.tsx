import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

const Seo = ({ title }) => {
  const data = useStaticQuery(graphql`
        query {
          site {
            siteMetadata {
              title
            }
          }
        }
  `)
  const tabTitle = title ? `${title} | ${data.site.siteMetadata.title}`: `${data.site.siteMetadata.title}`

  return (
    <title>{tabTitle}</title>
  )
}

export default Seo