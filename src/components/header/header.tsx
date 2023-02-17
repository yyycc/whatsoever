import * as React from "react"
import './header.scss'
import { Link } from "gatsby"
import { Dropdown, Space } from "antd"
import { DownOutlined, MenuOutlined } from '@ant-design/icons'
import { spaceToHyphen } from "../../utils/common"
import { IFrontmatter } from "../data"
import type { MenuProps } from 'antd';

const Header = ({ title, blogData }: { title: string, blogData: Array<{ frontmatter: IFrontmatter }> }) => {
  const allFolders: IFrontmatter[] = blogData.map(ele => ({
    folder: ele.frontmatter.folder,
    tag: ele.frontmatter.tag,
    slug: ele.frontmatter.slug,
    title: ele.frontmatter.title,
    date: ele.frontmatter.date,
  }))
  let showFolders: { [key: string]: IFrontmatter[] } = {}

  allFolders.forEach(ele => {
    const { folder } = ele
    const folders = folder?.split(',') // folder内容支持,分隔，含有$符号的folder不使用tag作为二级目录
    folders?.forEach(fol => (showFolders[fol] || (showFolders[fol] = [])).push(ele))
  })
  const orderedShow = Object.keys(showFolders).sort((a: string, b: string) => {
    if (a.indexOf('$') > -1) {
      return -1
    }
    return 1
  })
  const multiItems: MenuProps['items'] = []
  orderedShow.forEach(order => {
    if (order.indexOf('$') > -1) {
      const label = order.replace('$', '')
      multiItems.push({
        key: label,
        label: <Link to={`/blog/${spaceToHyphen(label)}`}> {label}</Link>,
      })
    } else {
      const data = showFolders[order]
      const tags: string[] = [...new Set(data.map((ele: IFrontmatter) => ele.tag))]
      const children: MenuProps['items'] = []
      tags.forEach(tag => {
        children.push({
          key: tag,
          label: (
            <Link to={`/blog/${spaceToHyphen(order)}/${tag}`}>{tag}</Link>
          )
        })
      })
      multiItems.push({
        key: order,
        label: order,
        children
      })
    }
  })
  return (
    <div className="header">
      <div className="header-content">
        <div className="header-content-title">
          <Link to="/" className="header-content-title-link">
            {title}
          </Link>
        </div>
        <div className="header-content-nav">
          {orderedShow.map(folder => {
            const data = showFolders[folder]
            const tags: string[] = [...new Set(data.map((ele: IFrontmatter) => ele.tag))]
            const items = tags.map((ele: string) => ({
              key: ele, label: (
                <Link to={`/blog/${spaceToHyphen(folder)}/${ele}`}>{ele}</Link>
              )
            }))
            if (folder.indexOf('$') > -1) {
              const singleFolder = folder.replace('$', '')
              return <div key={folder} className="header-content-nav__div">
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
        <div className="header-content-bar">
          <Dropdown className="header-content-nav__dropdown" menu={{ items: multiItems }}>
            <MenuOutlined/>
          </Dropdown>
        </div>
      </div>
    </div>
  )
}

export default Header