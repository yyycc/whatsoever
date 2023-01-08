import * as React from 'react'
import { CalendarOutlined, DoubleRightOutlined } from '@ant-design/icons'
import Layout from '../components/layout'
import Seo from "../components/seo"
import Info from "../components/info/info"
import { graphql, Link, useStaticQuery } from "gatsby"
import Category from "../components/category/category"
import { useState } from "react"
import { Space } from "antd"

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
                  excerpt
                  frontmatter {
                      tag
                      slug
                      date(formatString: "YYYY-MM-DD")
                  }
              }
          }
      }
  `)
  const { nodes } = data.allMdx
  const displayNodes = nodes.filter(node => !tag || node.frontmatter.tag === tag)
  return (
    <Layout>
      {/*<p>This blog is still under construction~</p>*/}
      <div className="index">
        <div className="index-left">
          {displayNodes.map(ele => {
            return <div className="index-left-list">
              <div className="index-left-list-title">
                {ele.frontmatter.slug}
              </div>
              <Space className="index-left-list-date">
                <CalendarOutlined/>
                {ele.frontmatter.date}
              </Space>
              <div className="index-left-list-excerpt">
                {ele.excerpt}
              </div>
              <div className="index-left-list-read">
                <Link to={`/blog/${ele.frontmatter.slug}`}>
                  阅读全文
                  <DoubleRightOutlined style={{fontSize: '10px'}}/>
                </Link>
              </div>
            </div>
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