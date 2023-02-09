import * as React from 'react'
import BlogList from "../blog-list/blog-list"
import './front-end.scss'
import { IFrontmatter } from "../data"
import { useState } from "react"

const FrontEnd = ({ title, tag }: Partial<IFrontmatter>) => {
  const [total, setTotal] = useState(0)
  return (
    <div className="front-end">
      <div className="front-end-title">{title}</div>
      <div className="front-end-total">total: {total}</div>
      <BlogList tag={tag} setTotal={setTotal}/>
    </div>
  )
}

export default FrontEnd