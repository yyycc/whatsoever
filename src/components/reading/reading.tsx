import * as React from 'react'
import BlogList from "../blog-list/blog-list"
import './reading.scss'

const Reading = ({ title, tag, folder }) => {
  return (
    <div className="reading">
      <div className="reading-title">{title}</div>
      <BlogList tag={tag} folder={folder}/>
    </div>
  )
}

export default Reading