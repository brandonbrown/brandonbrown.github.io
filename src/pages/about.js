import React from 'react'
import { Helmet } from "react-helmet"

import Link from 'gatsby-link'

// import { rhythm, scale } from '../utils/typography'

import '../sass/s.scss'

// import logo from '../assets/logo.svg'
// import square from '../assets/covers/square.jpg'

import Layout from "../components/layout"

export default function About() {
  return (
    <Layout>
    <Helmet>
          <meta charSet="utf-8" />
          <title>About</title>
          <link rel="canonical" href="https://bybrandonbrown.com/about" />
    </Helmet>
    <div className="content-wrapper creator-page about">
      <section className="myTeaching">
        <h1>Brandon Brown is a multi-disciplinary designer, developer, and educator. He’s devoted to advancing the practice of design thinking across mediums and teaches strategic thinking through design and development at Full Sail University.</h1>
        <h1>Currently he's working on creating a <Link to="/teaching" title="Teaching">set of new design &amp; development courses</Link>, <Link to="/training">helping people celebrate their well-being</Link>, and is taking on new freelance projects &amp; User Experience oriented contracts.</h1>
      </section>
      <section className="myExperience">
        <div>
        <h2>Experience</h2>
        <ul>
          <li>Course Director <span>Full Sail University</span></li>
          <li>Personal Trainer <span>ACE Certified</span></li>
          <li>Freelance <span>Design And Development</span></li>
          <li>Senior Web Designer <span>Designzillas</span></li>
          <li>Visual Design Engineer <span>appendTo</span></li>
          <li>Junior Designer <span>Mindcomet</span></li>
          <li>Multimedia Designer <span>EarthCam</span></li>
          <li><a href="https://www.linkedin.com/in/bybrandonbrown/" title="Brandon's LinkedIn Profile">Visit LinkedIn Profile</a></li>
        </ul>
        </div>
        <div>
        <h2>Recent Launches</h2>
        <ul>
          <li><a href="https://integrativepeptides.com/" target="_blank" rel="noopener">Integrative Peptides</a></li>
          <li><a href="https://lumaandleaf.com/" target="_blank" rel="noopener">Luma &amp; Leaf</a></li>
          <li><a href="https://holtraceuticals.com/" target="_blank" rel="noopener">Holtraceuticals</a></li>
          <li><a href="https://www.venueedgepro.com/" target="_blank" rel="noopener">Venue Edge</a></li>
          <li><a href="https://www.shopstands.com/" target="_blank" rel="noopener">Stands</a></li>
        </ul>
        </div>
        <div>
        <h2>Contact</h2>
        <ul>
          <li><a href="mailto:hello@bybrandonbrown.com">hello@bybrandonbrown.com</a></li>
          <li><a href="https://twitter.com/bybrandonbrown">twitter: @bybrandonbrown.com</a></li>
          <li><a href="https://www.dropbox.com/s/o1h1uw3wcwp30en/brandonbrown-resume-2019.pdf?dl=0">download resume</a></li>

        </ul>
        </div>
      </section>
    </div>
    </Layout>
  );
}

// const Writing = ({ children }) => (
//     <div className="content-wrapper consumer-page">
//       <h1>Notes on the Audio Books &amp; Podcasts I've Listened To</h1>
//       <section className="consumer-container">
//         <h2>2019</h2>
//
//
//       </section>
//     </div>
// )
