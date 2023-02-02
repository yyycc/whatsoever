import * as React from 'react'
import BlogList from "../blog-list/blog-list"
import './front-end.scss'

const FrontEnd = ({ title, tag }) => {
  return (
    <div className="front-end">
      <div className="front-end-title">{title}</div>
      <BlogList tag={tag}/>
    </div>
  )
}

export default FrontEnd