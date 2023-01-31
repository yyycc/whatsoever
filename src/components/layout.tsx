import * as React from 'react'
import './layout.scss'
import Header from "./header/header"
import Footer from "./footer/footer"
import UseSiteMetadata from "../hooks/use-site-metadata"
import UseBlogHome from "../hooks/use-blog-home"

const Layout = ({ children }) => {
  const { title } = UseSiteMetadata().site.siteMetadata
  const { nodes } = UseBlogHome().allMdx
  return (
    <div className='layout'>
      <Header title={title} blogData={nodes}/>
      <main>
        {children}
        <Footer/>
      </main>
    </div>
  )
}

export default Layout