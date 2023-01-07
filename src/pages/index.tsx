import * as React from 'react'
import Layout from '../components/layout'
import Seo from "../components/seo"
import Info from "../components/info/info"

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      {/*<p>This blog is still under construction~</p>*/}
      <Info/>
    </Layout>
  )
}

export const Head = () => <Seo/>

export default IndexPage