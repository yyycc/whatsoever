import * as React from 'react'
import BlogList from "../blog-list/blog-list"
import './common-source-code.scss'
import { IFrontmatter } from "../data"

const CommonSourceCode = ({ title, tag, folder }: Partial<IFrontmatter>) => {
  return (
    <div className="common-source-code">
      <div className="common-source-code-title">{title}</div>
      <BlogList tag={tag} folder={folder}/>
    </div>
  )
}

export default CommonSourceCode