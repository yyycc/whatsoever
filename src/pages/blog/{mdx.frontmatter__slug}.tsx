import * as React from 'react'
import { ConfigProvider, Anchor } from 'antd'
import { Disqus, CommentCount } from 'gatsby-plugin-disqus'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { graphql } from "gatsby"

const BlogPost = ({ data, children }) => {
  const { tableOfContents, frontmatter, id } = data.mdx
  const { siteUrl } = data.site.siteMetadata
  const { title, slug, date } = frontmatter
  const items = handleAnchorItem(tableOfContents.items)
  const disqusConfig = {
    url: `${siteUrl}/blog/${slug}`,
    identifier: id,
    title: title,
  }
  return (
    <Layout>
      <div className="mdx-content">
        <div className="mdx-content-data">
          <h1 className='heading'>{title}</h1>
          <p>{date}</p>
          {children}
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
      <Disqus config={disqusConfig}/>
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
      frontmatter {
        title
        slug
        date(formatString: "MMMM D, YYYY")
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

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title}/>

export default BlogPost