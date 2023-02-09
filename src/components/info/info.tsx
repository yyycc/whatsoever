import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import { GithubOutlined, MailOutlined } from '@ant-design/icons'
import './info.scss'
import { IMetadata } from "../data"

const Info = ({ data }: { data: IMetadata }) => {
  const { motto, github, email } = data.site.siteMetadata
  return (
    <div className="info">
      <div className="info-profile">
        <StaticImage
          class="info-profile-img"
          alt="Kitty with glasses"
          src="../../images/favicon.jpeg"
        />
      </div>
      <div className="info-motto">{motto}</div>
      <div className="info-media">
        <a target="_blank" href={github} className="info-media-icon">
          <GithubOutlined style={{ color: 'black' }}/>
        </a>
        <a href={`mailto:${email}`} className="info-media-icon">
          <MailOutlined style={{ color: 'black' }}/>
        </a>
      </div>
    </div>
  )
}

export default Info