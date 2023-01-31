import * as React from "react"
import './header.scss'
import { Link } from "gatsby"
import { Dropdown, Space } from "antd"
import { DownOutlined } from '@ant-design/icons'
import { spaceToHyphen } from "../../utils/common"

const Header = ({ title, blogData }) => {
  const allFolders = blogData.map(ele => ({
    folder: ele.frontmatter.folder,
    tag: ele.frontmatter.tag,
    slug: ele.frontmatter.slug
  }))
  let showFolders = {}
  allFolders.forEach(ele => {
    (showFolders[ele.folder] || (showFolders[ele.folder] = [])).push(ele)
  })
  return (
    <div className="header">
      <div className="header-content">
        <div className="header-content-title">
          <Link to="/" className='header-content-title-link'>
            {title}
          </Link>
        </div>
        <div className="header-content-nav">
          {Object.keys(showFolders).map(folder => {
            const data = showFolders[folder]
            const tags = [...new Set(data.map(ele => ele.tag))]
            const items = tags.map((ele, index) => ({ key: ele, label: (
              <Link to={`/blog/${spaceToHyphen(folder)}/${ele}`}>{ele}</Link>
              ) }))
            return (
              <Dropdown key={folder} menu={{ items }}>
                <Space>
                  {folder}
                  <DownOutlined/>
                </Space>
              </Dropdown>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Header