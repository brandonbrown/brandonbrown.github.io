import React from 'react'
import Link from 'gatsby-link'

import { rhythm, scale } from '../utils/typography'

import '../sass/s.scss'

import logo from '../assets/logo.svg'
import square from '../assets/covers/square.jpg'

export default function About() {
  return (
    <div className="content-wrapper creator-page about">
      <section className="myTeaching">
        <h1>Brandon Brown is a multi-disciplinary designer, developer, and educator. He’s devoted to advancing the practice of design thinking across mediums and teaches strategic thinking through design and development at Full Sail University.</h1>
        <h1>Currently he's working on creating a <a href="https://elitemusicaccess.com" title="Elite Music Access">better platform for creators</a>, <a href="https://minmaxfit.com">helping people celebrate their well-being</a>, and is taking on freelance projects.</h1>
      </section>
      <section className="myExperience">
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
        <h2>Contact</h2>
        <ul>
          <li><a href="mailto:brandon@bybrandonbrown.com">brandon@bybrandonbrown.com</a></li>
          <li><a href="https://twitter.com/bybrandonbrown">twitter: @bybrandonbrown.com</a></li>
          <li><a href="https://www.dropbox.com/s/o1h1uw3wcwp30en/brandonbrown-resume-2019.pdf?dl=0">download resume</a></li>

        </ul>
      </section>
    </div>
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
