import * as React from "react"
import UseBlogHome from "../../hooks/use-blog-home"
import { Link } from "gatsby"
import { Space } from "antd"
import { CalendarOutlined, DoubleRightOutlined, TagOutlined } from "@ant-design/icons"
import './blog-list.scss'

const BlogList = ({ tag }) => {
  const data = UseBlogHome()
  const { nodes } = data.allMdx
  const displayList = nodes.filter(node => !tag || node.frontmatter.tag === tag)
  return (
    <div className="blog-list">
      {displayList.map(ele => {
        return <div key={ele.frontmatter.slug} className="blog-list-list">
          <div className="blog-list-list-title">
            <Link to={`/blog/${ele.frontmatter.slug}`}>
              {ele.frontmatter.title}
            </Link>
          </div>
          <Space size="middle" className="blog-list-list-infos">
            <Space>
              <CalendarOutlined/>
              {ele.frontmatter.date}
            </Space>
            <Space>
              <TagOutlined/>
              {ele.frontmatter.tag}
            </Space>
          </Space>
          <div className="blog-list-list-excerpt">
            {ele.excerpt}
          </div>
          <div className="blog-list-list-read">
            <Link to={`/blog/${ele.frontmatter.slug}`}>
              阅读全文
              <DoubleRightOutlined style={{ fontSize: '10px' }}/>
            </Link>
          </div>
        </div>
      })}
    </div>
  )
}

export default BlogList