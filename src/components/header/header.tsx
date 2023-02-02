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
    const { folder } = ele
    const folders = folder.split(',') // folder内容支持,分隔，含有$符号的folder不使用tag作为二级目录
    folders.forEach(fol => (showFolders[fol] || (showFolders[fol] = [])).push(ele))
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
          {Object.keys(showFolders).sort((a: string, b: string) => {
            if (a.indexOf('$') > -1) {
              return -1
            }
            return 1
          }).map(folder => {
            const data = showFolders[folder]
            const tags = [...new Set(data.map(ele => ele.tag))]
            const items = tags.map((ele, index) => ({
              key: ele, label: (
                <Link to={`/blog/${spaceToHyphen(folder)}/${ele}`}>{ele}</Link>
              )
            }))
            if (folder.indexOf('$') > -1) {
              const singleFolder =  folder.replace('$', '')
              return <div className="header-content-nav__div">
                <Link to={`/blog/${spaceToHyphen(singleFolder)}`}> {singleFolder}</Link>

              </div>
            }
            return (
              <Dropdown className="header-content-nav__dropdown" key={folder} menu={{ items }}>
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