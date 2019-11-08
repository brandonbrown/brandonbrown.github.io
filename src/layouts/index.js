import React from 'react'
import Link from 'gatsby-link'
import { Helmet } from "react-helmet"

import '../sass/s.scss'

import Footer from '../components/Footer'

import logo from '../assets/logo.svg'

import exampleImage from '../assets/shape.svg'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    return (
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
                <Link to="/writing/">Writing</Link>
                <a href="#">Creating</a>
                <Link to="/sharing/">Sharing</Link>
                <Link to="/reading/">Reading</Link>
                <Link to="/listening/">Listening</Link>
                <Link to="/watching/">Watching</Link>
                <a href="#">Training</a>
                <a href="#">About</a>
              </nav>

          </div>
        </header>
        <main>
          {children()}
        </main>
        <Footer />
      </div>

    )
  }
}

export default Template