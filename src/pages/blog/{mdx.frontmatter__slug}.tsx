import * as React from 'react'
import { ConfigProvider, Anchor, Space } from 'antd'
import Valine from 'gatsby-plugin-valine'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { graphql } from "gatsby"
import { CalendarOutlined, TagOutlined } from "@ant-design/icons"

const BlogPost = ({ data, children }) => {
  const { tableOfContents, frontmatter } = data.mdx
  const { title, date, tag } = frontmatter
  const items = handleAnchorItem(tableOfContents.items)

  return (
    <Layout>
      <div className="mdx-content">
        <div className="mdx-content-left">
          <h1 className='mdx-content-left-heading'>{title}</h1>
          <Space size="middle" className="mdx-content-left-infos">
            <Space>
              <CalendarOutlined/>
              {date}
            </Space>
            <Space>
              <TagOutlined/>
              {tag}
            </Space>
          </Space>
          <article className="mdx-content-left-data">
            {children}
          </article>
        </div>
        {Boolean(items?.length) && <div className="mdx-content-nav">
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: '#8a4baf', // 同时修改style.css中的--color-primary
              },
            }}
          >
            <Anchor affix={false} targetOffset={80} items={items}/>
          </ConfigProvider>
        </div>}
      </div>
      <Valine appid="U16yUflAALySICZhsJiwmobC-gzGzoHsz" appkey="SuQzXF7zopGW41PIraZdurG3"/>
    </Layout>
  )
}

function handleAnchorItem(data) {
  return data?.map(ele => {
    const res = {
      key: ele.url,
      href: ele.url,
      title: ele.title
    }
    if (ele.items) {
      return {
        ...res,
        children: handleAnchorItem(ele.items)
      }
    }
    return res
  })
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      excerpt
      frontmatter {
        title
        slug
        date(formatString: "YYYY-MM-DD")
        tag
      }
      tableOfContents
      id
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} description={data.mdx.excerpt}/>

export default BlogPost