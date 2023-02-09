import * as React from 'react'
import BlogList from "../blog-list/blog-list"
import './common-reading.scss'
import { IFrontmatter } from "../data"
import { useState } from "react"

const CommonReading = ({ title, tag, folder }: Partial<IFrontmatter>) => {
  const [total, setTotal] = useState(0)
  return (
    <div className="common-reading">
      <div className="common-reading-title">{title}</div>
      <div className="common-reading-total">total: {total}</div>
      <BlogList tag={tag} folder={folder} setTotal={setTotal}/>
    </div>
  )
}

export default CommonReading