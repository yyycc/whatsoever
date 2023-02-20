import * as React from "react"
import UseBlogHome from "../../hooks/use-blog-home"
import { Link } from "gatsby"
import { Space } from "antd"
import { CalendarOutlined, DoubleRightOutlined, TagOutlined } from "@ant-design/icons"
import './blog-list.scss'
import { IFrontmatter, INode } from "../data"
import { useEffect } from "react"

const BlogList = ({ tag, folder, setTotal }: Partial<IFrontmatter> & { setTotal?: (total: number) => void }) => {
  const data = UseBlogHome()
  const { nodes } = data.allMdx
  const displayList = nodes.filter(
    (node: INode) => (!tag || node.frontmatter.tag === tag) && (!folder || node.frontmatter.folder?.indexOf(folder) > -1)
  )
  useEffect(() => {
    setTotal && setTotal(displayList.length)
  }, [displayList.length])

  return (
    <div className="blog-list">
      {displayList.map((ele: INode) => {
        return <div key={ele.frontmatter.slug} className="blog-list-list">
          <div className="blog-list-list-title">
            <Link to={`/blog/${ele.frontmatter.slug}`}>
              {ele.frontmatter.title}
            </Link>
          </div>
          <Space size="middle" className="blog-list-list-infos">
            <Space className="blog-list-list-infos__space">
              <CalendarOutlined/>
              {ele.frontmatter.date}
            </Space>
            <Space className="blog-list-list-infos__space">
              <TagOutlined/>
              {ele.frontmatter.tag}
            </Space>
          </Space>
          <div className="blog-list-list-excerpt">
            {ele.excerpt.replace('Before ', '')}
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