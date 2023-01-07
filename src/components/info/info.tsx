import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import './info.scss'
import { graphql, useStaticQuery } from "gatsby"

const Info = () => {
  const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    motto
                    github
                }
            }
        }
    `)
  const { motto, github } = data.site.siteMetadata
  return (
    <div className="info">
      <div className="info-profile">
        <StaticImage
          alt="Kitty with glasses"
          src="../../images/favicon.jpeg"
        />
      </div>
      <div className="info-motto">{motto}</div>
      <div className="info-media"></div>
    </div>
  )
}

export default Info