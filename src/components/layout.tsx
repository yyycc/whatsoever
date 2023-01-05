import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import './layout.scss'
import Header from "./header/header";

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
        <h1 className='heading'>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout