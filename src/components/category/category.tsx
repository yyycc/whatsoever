import * as React from 'react'
import { FolderOpenOutlined } from '@ant-design/icons'
import './category.scss'
import { ALL_TAGS, getArrayWithCount } from "../../utils/common"
import { IFrontmatter } from "../data"

const Category = ({ tag, setTag, data }: Partial<IFrontmatter> & { setTag: (tag: string) => void }) => {
  const tags = (data || []).map(ele => ele.frontmatter.tag)
  const tagsInfo = getArrayWithCount(tags, data?.length || 0)
  return (
    <div className="category">
      <div className="category-title">
        <FolderOpenOutlined/>
        <div className="category-title-div">分类</div>
      </div>
      <div className="category-list">
        {Object.keys(tagsInfo).map(info => {
          return <div key={info} onClick={() => setTag( info === tag || info === ALL_TAGS ? '' : info)}
                      className={["category-list-line", info === tag ? "category-list-line-active" : ''].join(' ')}>
            <div className="category-list-line-tag">{info}</div>
            <div className="category-list-line-count">{`(${tagsInfo[info]})`}</div>
          </div>
        })}
      </div>
    </div>
  )
}

export default Category