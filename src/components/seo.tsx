import * as React from 'react'
import UseSiteMetadata from '../hooks/use-site-metadata'

const Seo = ({ title, description }) => {
  const data = UseSiteMetadata()
  const tabTitle = title ? `${title} | ${data.site.siteMetadata.title}` : `${data.site.siteMetadata.title}`
  const tabDesc = description || 'whatsoever'

  return (
    <>
      <title>{tabTitle}</title>
      <meta name="description" content={tabDesc}/>
    </>
  )
}

export default Seo