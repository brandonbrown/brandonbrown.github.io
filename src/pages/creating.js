import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Particles from 'react-particles-js'

import { rhythm, scale } from '../utils/typography'

import '../sass/s.scss'

import logo from '../assets/logo.svg'
import square from '../assets/covers/square.jpg'

export default function Creating() {
  return (
    <div className="creator-page teaching">
      <section className="myTeaching">
        <div className="article-wrapper">
          <header>
            <h1>Select Work</h1>

          </header>
          <main>
            {/*
              1. heyinstructor
              2. pointlineplane
              3. private mentoring
              4. Design Course
              5. React Native Course
            */}
            <section>

            <blockquote>
              New Courses Coming 2020!
            </blockquote>

            </section>
          </main>


        </div>
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
