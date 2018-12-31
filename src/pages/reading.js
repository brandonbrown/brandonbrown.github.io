import React from 'react'
import Link from 'gatsby-link'

import { VictoryBar } from 'victory';

import { rhythm, scale } from '../utils/typography'

import '../sass/s.scss'

import logo from '../assets/logo.svg'
import exampleImage from '../assets/shape.svg'

const data = [
  {quarter: 1, earnings: 13000},
  {quarter: 2, earnings: 16500},
  {quarter: 3, earnings: 14250},
  {quarter: 4, earnings: 19000}
];

class Reading extends React.Component {
  render() {
    const { location, children } = this.props
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }
    
    return (
      <div>
        <header>
          
            
            <div className="header">
              <div className="headerContent">
                
                <h1>
                  <Link to={'/'}><img className="logo" src={logo} /></Link>
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
        </header>
        <main>
          <div className="content-wrapper">
            <section className="personal-info">
              <h2>Reading</h2>
            </section>
            
          </div>
        </main>
      </div>
        
    )
  }
}

export default Reading
