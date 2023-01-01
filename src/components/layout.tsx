import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import './layout.scss'

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
      <header>{data.site.siteMetadata.title}</header>
      <nav>
        <ul className='nav-links'>
          <li className='nav-link-item'>
            <Link to="/" className='nav-link-text'>
              Home
            </Link>
          </li>
          <li className='nav-link-item'>
            <Link to="/about" className='nav-link-text'>
              About
            </Link>
          </li>
          <li className='nav-link-item'>
            <Link to="/blog" className='nav-link-text'>
              Blog
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className='heading'>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout