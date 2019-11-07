import React from 'react'
import Link from 'gatsby-link'

import { rhythm, scale } from '../utils/typography'

import '../sass/s.scss'

import hello from '../assets/hello.gif'


export default class IndexPage extends React.Component {
  render() {
    const { location, children } = this.props
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    return (
      <div className="content-wrapper">
        <section className="personal-info">
          <img className="helloImg" src={hello} alt="Hello!" />
          <h1 className="introduction">
            <span>I'm Brandon, a Design &amp; Web Development Educator </span>
            <span>using technology to make the health & fitness industries stronger </span>
            <span>through meaningful applications and personalized solutions.</span>
          </h1>
          <h6>You will also find me on these networks:</h6>
          <ul className="sociallinks">
            <li>twitter <span>&mdash;</span> <a href="https://twitter.com/bybrandonbrown" title="Follow Brandon on twitter">@bybrandonbrown</a></li>
            <li>dribbble <span>&mdash;</span> <a href="https://dribbble.com/brandonbrown" title="Follow Brandon on dribbble">@brandonbrown</a></li>
            <li>medium <span>&mdash;</span> <a href="https://medium.com/@bybrandonbrown" title="Folow Brandon on Medium">@bybrandonbrown</a></li>
            <li>github <span>&mdash;</span> <a href="http://github.com/brandonbrown" title="Follow Brandon on GitHub">@brandonbrown</a></li>
            <li>instagram <span>&mdash;</span> <a href="https://instagram.com/heyinstructor" title="Follow Brandon on instagram">@heyinstructor</a></li>
            <li>youtube <span>&mdash;</span> <a href="#">@PointLinePlaneXYZ <span className="comingsoon">Coming Soon</span></a></li>
            <li>email <span>&mdash;</span> <a href="mailto:hey@bybrandonbrown.com">hey@bybrandonbrown.com</a></li>
          </ul>
        </section>
      </div>

    )
  }
}
