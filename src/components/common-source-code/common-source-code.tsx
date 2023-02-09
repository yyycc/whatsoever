import * as React from 'react'
import BlogList from "../blog-list/blog-list"
import './common-source-code.scss'
import { IFrontmatter } from "../data"
import { useState } from "react"

const CommonSourceCode = ({ title, tag, folder }: Partial<IFrontmatter>) => {
  const [total, setTotal] = useState(0)
  return (
    <div className="common-source-code">
      <div className="common-source-code-title">{title}</div>
      <div className="common-source-code-total">total: {total}</div>
      <BlogList tag={tag} folder={folder} setTotal={setTotal}/>
    </div>
  )
}

export default CommonSourceCode