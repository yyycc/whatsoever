import * as React from 'react'
import { Anchor, ConfigProvider, Popover, Space } from 'antd'
import Valine from 'gatsby-plugin-valine'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { graphql, Link } from "gatsby"
import { CalendarOutlined, MenuOutlined, TagOutlined } from "@ant-design/icons"
import { IAllMDX, IAnchor, IItem, IMDX } from "../../components/data"

const BlogPost = ({ data, children }: { data: IMDX & IAllMDX, children: any }) => {
  const { tableOfContents, frontmatter } = data.mdx
  const { nodes } = data.allMdx
  const { title, date, tag, slug, prev, next } = frontmatter
  const prevNode = nodes.filter(node => node.frontmatter.slug === prev)
  const nextNode = nodes.filter(node => node.frontmatter.slug === next)
  const items = handleAnchorItem(tableOfContents.items)
  const anchor = <ConfigProvider
    theme={{
      token: {
        colorPrimary: '#8a4baf', // 同时修改style.css中的--color-primary
      },
    }}
  >
    <Anchor affix={false} targetOffset={80} items={items}/>
  </ConfigProvider>
  return (
    <Layout>
      <div className="mdx-content">
        <div className="mdx-content-left-nav">
          <Popover autoAdjustOverflow={true} content={anchor} title="Title" trigger="click" placement="rightTop">
            <MenuOutlined/>
          </Popover>
        </div>
        <div className="mdx-content-left">
          <h1 className="mdx-content-left-heading">{title}</h1>
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
            <div className="mdx-content-left-data-pagination">
              <div className="mdx-content-left-data-pagination-prev">
                <span className="mdx-content-left-data-pagination-prev-title">{`<<上一篇`}</span>
                {prevNode.length ?
                  <Link to={`/blog/${prevNode[0].frontmatter.slug}`}>
                    {prevNode[0].frontmatter.title}
                  </Link> : <span>到头啦~~</span>}
              </div>
              <div className="mdx-content-left-data-pagination-next">
                {nextNode.length ? <Link to={`/blog/${nextNode[0].frontmatter.slug}`}>
                  {nextNode[0].frontmatter.title}
                </Link> : <span>到底啦~~</span>}
                <span className="mdx-content-left-data-pagination-next-title">{`下一篇>>`}</span>
              </div>
            </div>
          </article>
        </div>
        {Boolean(items?.length) && <div className="mdx-content-nav">
          {anchor}
        </div>}
      </div>
      <Valine path={slug} appid="U16yUflAALySICZhsJiwmobC-gzGzoHsz" appkey="SuQzXF7zopGW41PIraZdurG3"/>
    </Layout>
  )
}

function handleAnchorItem(data: IItem[]): IAnchor[] {
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
        prev
        next
      }
      tableOfContents
      id
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
    allMdx {
      nodes {
        excerpt
        frontmatter {
          title
          tag
          slug
          date(formatString: "YYYY-MM-DD")
          folder
          prev
          next
        }
      }
    }
  }
`

export const Head = ({ data }: { data: IMDX }) => <Seo title={data.mdx.frontmatter.title}
                                                       description={data.mdx.excerpt}/>

export default BlogPost