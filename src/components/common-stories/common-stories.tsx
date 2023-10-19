import * as React from 'react'
import BlogList from "../blog-list/blog-list"
import './common-stories.scss'
import { IFrontmatter } from "../data"
import { useState } from "react"

const CommonAI = ({ title, tag, folder }: Partial<IFrontmatter>) => {
  const [total, setTotal] = useState(0)
  return (
    <div className="common-stories">
      <div className="common-stories-title">{title}</div>
      <div className="common-stories-total">total: {total}</div>
      <BlogList tag={tag} folder={folder} setTotal={setTotal}/>
    </div>
  )
}

export default CommonAI