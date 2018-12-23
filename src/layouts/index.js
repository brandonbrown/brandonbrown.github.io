import React from 'react'
import Link from 'gatsby-link'

import { rhythm, scale } from '../utils/typography'

import '../sass/s.scss'

import logo from '../assets/logo.svg'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    if (location.pathname === rootPath) {
      header = (
        <div className="header">
          <div className="headerContent">
            <img className="logo" src={logo} />
            <h1>
              <Link
                to={'/'}
              >
                Brandon Brown
              </Link>
            </h1>
          </div>
        </div>
      )
    } else {
      header = (
        <div className="header">
          <div className="headerContent">
            <img className="logo" src={logo} />
            <h1>
              <Link
                to={'/'}
              >
                Brandon Brown
              </Link>
            </h1>
          </div>
        </div>
      )
    }
    return (
      <div>
        <div
          style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            // maxWidth: '45rem',
            // padding: `${rhythm(1.5)} 0 0`,
            fontFamily:'font-light',
          }}
        >
          
          {header}
        </div>
        <main
          style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            // maxWidth: rhythm(36),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
            fontFamily:'font-light',
          }}
        >
          {children()}
        </main>
      </div>
    )
  }
}

export default Template
