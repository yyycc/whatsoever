import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import './layout.scss'
import Header from "./header/header"
import Footer from "./footer/footer"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    siteUrl
                }
            }
        }
    `)
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