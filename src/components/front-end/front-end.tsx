import * as React from 'react'
import BlogList from "../blog-list/blog-list"
import './front-end.scss'

const FrontEnd = ({ title, type }) => {
  return (
    <div className="front-end">
      <div className="front-end-title">{title}</div>
      <BlogList tag={type}/>
    </div>
  )
}

export default FrontEnd