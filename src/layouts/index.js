import React from 'react'
import Link from 'gatsby-link'

import { VictoryBar } from 'victory';

import { rhythm, scale } from '../utils/typography'

import '../sass/s.scss'

import logo from '../assets/logo.svg'

const data = [
  {quarter: 1, earnings: 13000},
  {quarter: 2, earnings: 16500},
  {quarter: 3, earnings: 14250},
  {quarter: 4, earnings: 19000}
];

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
        <div
          style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            // maxWidth: '45rem',
            // padding: `${rhythm(1.5)} 0 0`,
            fontFamily:'font-light',
          }}
        >
          
          <div className="header">
            <div className="headerContent">
              <img className="logo" src={logo} />
              <h1>
                <Link
                  to={'/'}
                >
                  <span>A Catalogue of</span>Brandon Brown
                </Link>
              </h1>
            </div>
            <nav>
              <a href="#">Writing</a>
              <a href="#">Reading</a>
              <a href="#">Listening</a>
              <a href="#">Watching</a>
              <a href="#">Training</a>
              <a href="#">Producing</a>
              <a href="#">About</a>
            </nav>
            
            </div>
        </div>
        <main
          style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            // maxWidth: rhythm(36),
            padding: `${rhythm(1.5)} 0`,
            fontFamily:'font-light',
            width: '90%'
          }}
        >
          <div className="grid-container">
            <div className="g1">
              <div className="gridInterior">
                <h1>Hi, I'm Brandon and this is a record of <span>almost</span> everything I'm doing.</h1>
                <p>This website is an experiment of the quantified-self. How much is too much, where's the balance, and what can I learn from paying attention to the details? Tracking started January 1, 2019.</p>
                <p>There's a fair share of content that I'll be filling in as well. I'm a designer by passion, writer by interest, and YouTube Creator out of pure will.</p>
              </div>
            </div>
            <div className="g2 grid-cell">
              <div className="grid-quickview">
                <p>Last Tracked:</p>
              </div>
            </div>
            <div className="g3 grid-cell">
              <div className="grid-quickview">
                <p>Articles written</p>
                <p>Most Recent Article:</p>
              </div>
            </div>
            <div className="g4 grid-cell">
              <div className="grid-quickview">
                <p>Podcasts Minutes Listened:</p>
              </div>
            </div>
            <div className="g5 grid-cell">
              <div className="grid-quickview">
                <p>Deadlift Progress:</p>
              </div>
            </div>
            <div className="g6">
              <div className="g7"></div>
              <div className="g8"></div>
              <div className="g9"></div>
              <div className="g10"></div>
              <div className="g11"></div>
              <div className="g12"></div>
            </div>
          </div>
          {/* {children()} */}
          


        </main>
      </div>
    )
  }
}

export default Template
