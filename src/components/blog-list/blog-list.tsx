import * as React from "react"
import { useEffect } from "react"
import UseBlogHome from "../../hooks/use-blog-home"
import { Link } from "gatsby"
import { CalendarOutlined, DoubleRightOutlined, TagOutlined } from "@ant-design/icons"
import './blog-list.scss'
import { IFrontmatter, INode } from "../data"

const BlogList = ({ tag, date, folder, setTotal, data }: Partial<IFrontmatter> & { setTotal?: (total: number) => void }) => {
  const allData = data || UseBlogHome().allMdx.nodes
  const displayList = allData.filter(
    (node: INode) =>
      (!tag || node.frontmatter.tag?.split(',').includes(tag))
      && (!date || node.frontmatter.date.indexOf(date) > -1)
      && (!folder || node.frontmatter.folder?.indexOf(folder) > -1),
  )
  useEffect(() => {
    setTotal && setTotal(displayList.length)
    window.scroll(0, 0)
  }, [displayList.length])

  return (
    <>
      {displayList.map((ele: INode) => {
        return <div key={ele.frontmatter.slug} className="blog-list-list">
          <Link to={`/blog/${ele.frontmatter.slug}`}>
            {ele.frontmatter.title}
          </Link>
          <div className="blog-list-list-infos">
            <div className="blog-list-list-infos__space">
              <CalendarOutlined/>
              {ele.frontmatter.date}
            </div>
            {ele.frontmatter.tag?.split(',').map(tag => {
              return <div className="blog-list-list-infos__space">
                <TagOutlined/>
                {tag}
              </div>
            })}
            
          </div>
          <div className="blog-list-list-excerpt">
            {ele.excerpt?.replace('Before ', '')}
          </div>
          <div className="blog-list-list-read">
            <Link to={`/blog/${ele.frontmatter.slug}`}>
              阅读全文
              <DoubleRightOutlined style={{ fontSize: '10px' }}/>
            </Link>
          </div>
        </div>
      })}
    </>
  )
}

export default BlogList