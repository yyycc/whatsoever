import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from "../components/seo"

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        height={200}
        width={200}
        alt="Kitty with glasses"
        src="../images/favicon.jpeg"
      />
    </Layout>
  )
}

export const Head = () => <Seo title="Home Page"/>

export default IndexPage