import * as React from 'react'
import { useState } from 'react'
import Layout from '../components/layout'
import Seo from "../components/seo"
import Info from "../components/info/info"
import Category from "../components/category/category"
import './index.scss'
import UseBlogHome from "../hooks/use-blog-home"
import UseSiteMetadata from "../hooks/use-site-metadata"
import BlogList from "../components/blog-list/blog-list"

const IndexPage = () => {
  const [tag, setTag] = useState('')
  const data = UseBlogHome()
  const siteMetadata = UseSiteMetadata()
  const { nodes } = data.allMdx
  return (
    <Layout>
      {/*<p>This blog is still under construction~</p>*/}
      <div className="index">
        <div className="index-left">
          <BlogList />
        </div>
        <div className="index-right">
          <Info data={siteMetadata}/>
          <Category tag={tag} setTag={setTag} data={nodes}/>
        </div>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo/>

export default IndexPage