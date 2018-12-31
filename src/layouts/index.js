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
              <h2>Welcome!</h2>
              <h1 className="introduction">
                <span>Brandon is a Design &amp; Development Educator</span>
                <span>solving problems in the health & fitness industries</span>
                <span>with efficient and personalized technology solutions.</span>
              </h1>
              <ul className="sociallinks">
                <li>twitter <span>&mdash;</span> <a href="#">@bybrandonbrown</a></li>
                <li>dribbble <span>&mdash;</span> <a href="#">@brandonbrown</a></li>
                <li>medium <span>&mdash;</span> <a href="#">@bybrandonbrown</a></li>
                <li>github <span>&mdash;</span> <a href="#">@brandonbrown</a></li>
                <li>youtube <span>&mdash;</span> <a href="#">@PointLinePlane</a></li>
                <li>email <span>&mdash;</span> <a href="#">hey@bybrandonbrown.com</a></li>
              </ul>
            </section>
            <section className="content-previews">
              <h2>Recent Things</h2>
              <ul>
                <li>
                  <section className="imageReference">
                    <a href="#">
                      <img src={exampleImage} />
                    </a>
                  </section>
                  <section className="contentPreview">
                    <a href="#">
                      <h3>Content Title</h3>
                      <p>One of the most complex products I have built this year, for which I designed not only different pages & states.</p>
                    </a>
                  </section>
                </li>
                <li>
                  <section className="imageReference">
                    <a href="#">
                      <img src={exampleImage} />
                    </a>
                  </section>
                  <section className="contentPreview">
                    <a href="#">
                      <h3>Content Title</h3>
                      <p>One of the most complex products I have built this year, for which I designed not only different pages & states.</p>
                    </a>
                  </section>
                </li>
                <li>
                  <section className="imageReference">
                    <a href="#">
                      <img src={exampleImage} />
                    </a>
                  </section>
                  <section className="contentPreview">
                    <a href="#">
                      <h3>Content Title</h3>
                      <p>One of the most complex products I have built this year, for which I designed not only different pages & states.</p>
                    </a>
                  </section>
                </li>
              </ul>
            </section>
          </div>
        </main>
      </div>
        
    )
  }
}

export default Template
