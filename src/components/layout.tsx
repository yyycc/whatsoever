import * as React from 'react'
import './layout.scss'
import Header from "./header/header"
import Footer from "./footer/footer"
import UseSiteMetadata from "../hooks/use-site-metadata"

const Layout = ({ children }) => {
  const data = UseSiteMetadata()
  return (
    <div className='layout'>
      <Header data={data}/>
      <main>
        {children}
        <Footer/>
      </main>
    </div>
  )
}

export default Layout