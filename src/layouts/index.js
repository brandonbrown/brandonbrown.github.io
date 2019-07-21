import React from 'react'
import Link from 'gatsby-link'

import '../sass/s.scss'

import logo from '../assets/logo.svg'
import hello from '../assets/hello.gif'
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
                <a href="#">Collecting</a>
                <a href="#">About</a>
              </nav>

          </div>
        </header>
        <main>
          <div className="content-wrapper">
            <section className="personal-info">
              <img className="helloImg" src={hello} alt="Hello!" />
              <h1 className="introduction">
                <span>I'm Brandon, a Design &amp; Web Development Educator </span>
                <span>focused on making the health & fitness industries stronger </span>
                <span>through meaningful and personalized technology solutions.</span>
              </h1>
              <h6>You will also find me on these networks:</h6>
              <ul className="sociallinks">
                <li>twitter <span>&mdash;</span> <a href="https://twitter.com/bybrandonbrown" title="Follow Brandon on twitter">@bybrandonbrown</a></li>
                <li>dribbble <span>&mdash;</span> <a href="https://dribbble.com/brandonbrown" title="Follow Brandon on dribbble">@brandonbrown</a></li>
                <li>medium <span>&mdash;</span> <a href="https://medium.com/@bybrandonbrown" title="Folow Brandon on Medium">@bybrandonbrown</a></li>
                <li>github <span>&mdash;</span> <a href="http://github.com/brandonbrown" title="Follow Brandon on GitHub">@brandonbrown</a></li>
                <li>youtube <span>&mdash;</span> <a href="#">@PointLinePlaneXYZ <span className="comingsoon">Coming Soon</span></a></li>
                <li>email <span>&mdash;</span> <a href="mailto:hey@bybrandonbrown.com">hey@bybrandonbrown.com</a></li>
              </ul>
            </section>
          </div>
        </main>
      </div>

    )
  }
}

export default Template
