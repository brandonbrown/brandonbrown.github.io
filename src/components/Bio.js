import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile.jpg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={`Brandon Brown`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
            borderRadius: rhythm(2)
          }}
        />
        <p
          className="biotext"
          style={{
            fontFamily:'IBM Plex Sans',
            fontSize: rhythm(.5),
            lineHeight: '1.25rem',
            marginTop: rhythm(.2)
          }}>
          Brandon is a <a href="https://dribbble.com/brandonbrown">designer</a> and <a href="https://github.com/brandonbrown">developer</a> focusing his work on creating better systems for education and health.{' '}
          <a href="https://twitter.com/bybrandonbrown">
            Say hi on Twitter.
          </a>

        </p>
      </div>
    )
  }
}

export default Bio
