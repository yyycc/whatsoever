import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import { GithubOutlined, MailOutlined } from '@ant-design/icons'
import './info.scss'
import { Link, } from "gatsby"

const Info = ({ data }) => {
  const { motto, github, email } = data.site.siteMetadata
  return (
    <div className="info">
      <div className="info-profile">
        <StaticImage
          alt="Kitty with glasses"
          src="../../images/favicon.jpeg"
        />
      </div>
      <div className="info-motto">{motto}</div>
      <div className="info-media">
        <Link target="_blank" to={github} className="info-media-icon">
          <GithubOutlined style={{ color: 'black' }}/>
        </Link>
        <Link to={`mailto:${email}`} className="info-media-icon">
          <MailOutlined style={{ color: 'black' }}/>
        </Link>
      </div>
    </div>
  )
}

export default Info