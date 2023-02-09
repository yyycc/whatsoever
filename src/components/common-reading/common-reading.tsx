import * as React from 'react'
import BlogList from "../blog-list/blog-list"
import './common-reading.scss'
import { IFrontmatter } from "../data"

const CommonReading = ({ title, tag, folder }: Partial<IFrontmatter>) => {
  return (
    <div className="common-reading">
      <div className="common-reading-title">{title}</div>
      <BlogList tag={tag} folder={folder}/>
    </div>
  )
}

export default CommonReading