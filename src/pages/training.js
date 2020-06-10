import React from 'react'
import Link from 'gatsby-link'
import { rhythm, scale } from '../utils/typography'
import Particles from 'react-particles-js'

import '../sass/s.scss'

// import logo from '../assets/logo.svg'
import mmf from '../assets/training/mmf-logo-red.svg'
import Layout from "../components/layout"

export default function Training() {
  return (
    <Layout>
    <div className="creator-page teaching">
      <section className="myTeaching">
        <div className="article-wrapper">
          <header>
            <h1>Self-autonomy and personal achievement are the secret-sauce to long-term health and fitness success.</h1>
            <h2>Everyday, people make small sacrifices to their personal well-being due to a lack of self-autonomy. Not being able to reach a shelf, unable to climb the stairs, knee-pain keeping them on the couch, or a lack of energy to get out of bed and do&mdash;anything. This is where personal trainers change lives and why I have a life goal of creating a new way to show people their full potential and help them to reach it: MinMaxFit.</h2>
          </header>
          <div className="fullWidthImage">
            <span>
              <img src={mmf} alt="MinMaxFit Logo" />
              <a href="https://minmaxfit.com">Visit MinMaxFit.com to learn more</a>
            </span>
            <Particles
            params={{
              "particles": {
                  "number": {
                      "value": 160,
                      "density": {
                          "enable": false
                      }
                  },
                  "color":{
                      "value": "#EE41F8",
                      "opacity": .7
                  },
                  "size": {
                      "value": 3,
                      "random": true,
                      "anim": {
                          "speed": 4,
                          "size_min": 0.3
                      }
                  },
                  "line_linked": {
                      "enable": false
                  },
                  "move": {
                      "random": true,
                      "speed": 1,
                      "direction": "top",
                      "out_mode": "out"
                  }
              }
          	}} />
          </div>
          <main>

            {/*<div className="article-left">
              <p>Over at <a href="https://minmaxfit.com">MinMaxFit</a>, I'm helping people to better their lives and meet goals that they can be proud of.</p>
              <p>Personal health is one of the most important endeavours you can strive for during your lifetime.</p>
            </div>
            */}
            <blockquote>
              More information coming soon&mdash;this page is under-construction.
            </blockquote>
          </main>
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
