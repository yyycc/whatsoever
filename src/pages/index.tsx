import * as React from 'react'
import { CalendarOutlined, DoubleRightOutlined, TagOutlined } from '@ant-design/icons'
import Layout from '../components/layout'
import Seo from "../components/seo"
import Info from "../components/info/info"
import { graphql, Link, useStaticQuery } from "gatsby"
import Category from "../components/category/category"
import { useState } from "react"
import { Space } from "antd"
import './index.scss'
import UseSiteMetadata from "../hooks/use-site-metadata"

const IndexPage = () => {
  const [tag, setTag] = useState('')
  const data = UseSiteMetadata()
  const { nodes } = data.allMdx
  const displayNodes = nodes.filter(node => !tag || node.frontmatter.tag === tag)
  return (
    <Layout>
      {/*<p>This blog is still under construction~</p>*/}
      <div className="index">
        <div className="index-left">
          {displayNodes.map(ele => {
            return <div key={ele.frontmatter.slug} className="index-left-list">
              <div className="index-left-list-title">
                <Link to={`/blog/${ele.frontmatter.slug}`}>
                  {ele.frontmatter.title}
                </Link>
              </div>
              <Space size="middle" className="index-left-list-infos">
                <Space>
                  <CalendarOutlined/>
                  {ele.frontmatter.date}
                </Space>
                <Space>
                  <TagOutlined/>
                  {ele.frontmatter.tag}
                </Space>
              </Space>
              <div className="index-left-list-excerpt">
                {ele.excerpt}
              </div>
              <div className="index-left-list-read">
                <Link to={`/blog/${ele.frontmatter.slug}`}>
                  阅读全文
                  <DoubleRightOutlined style={{ fontSize: '10px' }}/>
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