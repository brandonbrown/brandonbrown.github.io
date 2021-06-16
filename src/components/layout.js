/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import Footer from '../components/Footer'
import { Helmet } from "react-helmet"


import logo from '../assets/logo.svg'

// import exampleImage from '../assets/shape.svg'
// import Newsletter from '../components/Newsletter'

import '../sass/s.scss'

const Layout = ({ location, children }) => {

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
    <div>
      <Helmet>
        <meta name="google-site-verification" content="ScBT040CBhTA07b2L9L0eWw_J9XXLBD1TikZDHAxSZc" />
      </Helmet>
      <header>


          <div className="header">
            <div className="headerContent">

              <h1>
                <Link to={'/'}><img className="logo" src={logo} /></Link>
              </h1>
            </div>
            <nav>
              <Link to="/writing/" activeClassName="active" partiallyActive={true}>Writing</Link>
              <Link to="/teaching/" activeClassName="active" partiallyActive={true}>Teaching</Link>
              <Link to="/training/" activeClassName="active" partiallyActive={true}>Personal Training</Link>
              <Link to="/creating/" activeClassName="active" partiallyActive={true}>Creating</Link>
              <Link to="/bkmks/" activeClassName="active" partiallyActive={true}>BKMKS</Link>
              <Link to="/reading/" activeClassName="active" partiallyActive={true}>Reading</Link>
              <Link to="/listening/" activeClassName="active" partiallyActive={true}>Listening</Link>
              <Link to="/watching/" activeClassName="active" partiallyActive={true}>Watching</Link>
              <Link to="/about/" activeClassName="active" partiallyActive={true}>About</Link>
              {/* <a href="/about/">About</a> */}
            </nav>

        </div>
      </header>
      <main>
        {children}
      </main>
      <Footer />
    </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
