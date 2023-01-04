import * as React from 'react'
import { ConfigProvider, Anchor } from 'antd'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { graphql } from "gatsby";

const BlogPost = ({ data, children }) => {
  const { tableOfContents, frontmatter } = data.mdx
  const { title, date } = frontmatter
  const items = handleAnchorItem(tableOfContents.items)
  console.log('data', items)
  return (
    <Layout pageTitle={title}>
      <p>{date}</p>
      <div className="mdx-content">
        <div className="mdx-content-data">
          {children}
        </div>
        <div className="mdx-content-nav">
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: '#8a4baf', // 同时修改style.css中的--color-primary
              },
            }}
          >
            <Anchor targetOffset={20} items={items}/>
          </ConfigProvider>
        </div>
      </div>
      <footer>test</footer>
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
        date(formatString: "MMMM D, YYYY")
      }
      tableOfContents
    }
  }
`

export const Head = () => <Seo title="Super Cool Blog Posts"/>

export default BlogPost