import React from 'react'
import Link from 'gatsby-link'

import { rhythm, scale } from '../utils/typography'

import '../sass/s.scss'

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
        <h1
          className="header"
          style={{
            ...scale(.75),
            marginBottom: rhythm(1),
            marginTop: 0,
            fontFamily:'IBM Plex Serif',
            fontWeight: 900
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={'/'}
          >
            <span
            style={{
              fontSize: '.75rem',
              fontFamily:'IBM Plex Sans',
              fontWeight: 900,
              display: 'block',
              marginBottom: rhythm(-.65),
            }}
            >The Personal Website of </span>Brandon Brown
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          className="header"
          style={{
            ...scale(.75),
            marginBottom: rhythm(1.5),
            marginTop: 0,
            fontFamily:'IBM Plex Serif',
            fontWeight: 900
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={'/'}
          >
            <span
            style={{
              fontSize: '.75rem',
              fontFamily:'IBM Plex Sans',
              fontWeight: 900,
              display: 'block',
              marginBottom: rhythm(-.65),
            }}
            >The Personal Website of </span>Brandon Brown
          </Link>
        </h3>
      )
    }
    return (
      <div
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          fontFamily:'IBM Plex Serif',
        }}
      >
        {header}
        {children()}
      </div>
    )
  }
}

export default Template
