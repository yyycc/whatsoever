import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import './layout.scss'
import Header from "./header/header"
import Footer from "./footer/footer"

const Layout = ({ pageTitle, children }) => {
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
        {pageTitle && <h1 className='heading'>{pageTitle}</h1>}
        {children}
        <Footer/>
      </main>
    </div>
  )
}

export default Layout