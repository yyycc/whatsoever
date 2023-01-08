import * as React from 'react'
import Layout from '../components/layout'
import Seo from "../components/seo"
import Info from "../components/info/info"
import { graphql, useStaticQuery } from "gatsby"
import Category from "../components/category/category"
import { useState } from "react"

const IndexPage = () => {
  const [tag, setTag] = useState('')
  const data = useStaticQuery(graphql`
      query {
          site {
              siteMetadata {
                  motto
                  github
                  email
              }
          }
          allMdx {
              nodes {
                  frontmatter {
                      tag
                      slug
                  }
              }
          }
      }
  `)
  const { nodes } = data.allMdx
  const displayNodes = nodes.filter(node => !tag || node.frontmatter.tag === tag)
  return (
    <Layout pageTitle="Home Page">
      {/*<p>This blog is still under construction~</p>*/}
      <div className="index">
        <div className="index-left">
          {displayNodes.map(ele => {
            return <div>{ele.frontmatter.slug}</div>
          })}
        </div>
        <div className="index-right">
          <Info data={data}/>
          <Category tag={tag} setTag={setTag} data={nodes}/>
        </div>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo/>

export default IndexPage