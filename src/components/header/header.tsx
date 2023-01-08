import * as React from "react"
import './header.scss'
import { Link } from "gatsby";

const Header = ({ data }) => {
  const { title } = data.site.siteMetadata
  return (
    <div className="header">
      <div className="header-content">
        <div className="header-content-title">
          <Link to="/" className='header-content-title-link'>
            {title}
          </Link>
        </div>
        <div className="header-content-nav">
          <Link to="/" className='header-content-nav-text'>
            Home
          </Link>
          <Link to="/about" className='header-content-nav-text'>
            About
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header