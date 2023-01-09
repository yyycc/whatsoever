import * as React from 'react'
import UseSiteMetadata from '../hooks/use-site-metadata'

const Seo = ({ title }) => {
  const data = UseSiteMetadata()
  const tabTitle = title ? `${title} | ${data.site.siteMetadata.title}` : `${data.site.siteMetadata.title}`

  return (
    <>
      <title>{tabTitle}</title>
    </>
  )
}

export default Seo