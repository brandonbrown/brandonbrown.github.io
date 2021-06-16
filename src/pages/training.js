import React from 'react'
import Link from 'gatsby-link'
import { rhythm, scale } from '../utils/typography'
import Particles from 'react-particles-js'
import { Helmet } from "react-helmet"

import '../sass/s.scss'

// import logo from '../assets/logo.svg'
import mmf from '../assets/training/mmf-logo-red.svg'
import hdf from '../assets/training/hdf-logo.png'

import Layout from "../components/layout"

export default function Training() {
  return (
    <Layout>
    <Helmet>
          <meta charSet="utf-8" />
          <title>Personal Training</title>
          <link rel="canonical" href="https://bybrandonbrown.com/training" />
    </Helmet>
    <div className="creator-page teaching">
      <section className="myTeaching">
        <div className="article-wrapper">
          <header>
            <h1>Self-autonomy and personal achievement are the secret-sauce to long-term health and fitness success.</h1>
            <h2>Everyday, people make small sacrifices to their personal well-being due to a lack of self-autonomy or life and its responsibilites getting in the way. Not being able to reach a shelf, unable to climb the stairs, knee-pain keeping them on the couch, or a lack of energy to get out of bed and do&mdash;anything are a hard way to fell you're giving life your all. This is where personal trainers and health &amp; fitness professionals change lives and enabling people to know their full potential. Two personal projects of mine aim to help people overcome many of these everday hurdles: MinMaxFit and Happy Dad Fitness.</h2>
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

            <div className="article-left">
              <p>Over at <a href="https://minmaxfit.com">MinMaxFit</a>, I'm helping people to better their lives and meet the health &amp; fitness goals they've been chasing without success until now. MinMaxFit is a suite of tools combining all aspects of my backgrounds in Personal Training, Development, Design, and User Behavior Change.</p>
              <p>Additionally, MinMaxFit will further the development of an engaging system of motivators and fitness indicators eventually supported by AI technologies. Overtime, the technology behind MinMaxFit will become one of the premier smart-services of the health, fitness, and sports industries.</p>
            </div>
           
            <blockquote>
              More from minmaxfit.com coming soon&mdash;this project has entered a new phase of construction.
            </blockquote>
          </main>
        </div>
        <div className="article-wrapper">
          <header>
            {/* <h2>Happy wife, happy life.</h2> */}
          </header>
          <div className="fullWidthImage hdf">
            <span>
              <img src={hdf} alt="HappyDadFitness Logo" />
              <a href="https://happydadfitness.com/">Visit HappyDadFitness.com to learn more</a>
            </span>
            <Particles
            params={{
              "particles": {
                  "number": {
                      "value": 860,
                      "density": {
                          "enable": true
                      }
                  },
                  "color":{
                      "value": "#fff",
                      "opacity": .7
                  },
                  "size": {
                      "value": 1,
                      "random": false,
                      "anim": {
                          "speed": 10,
                          "size_min": 0.25
                      }
                  },
                  "line_linked": {
                      "enable": false
                  },
                  "move": {
                      "random": true,
                      "speed": .001,
                      "direction": "top",
                      "out_mode": "out"
                  }
              }
          	}} />
          </div>
          <main>

            <div className="article-left">
              <p>Sometimes Dad needs time to focus on himself. At <a href="https://happydadfitness.com">HappyDadFitness</a> I share tools, thoughts, strategies and other information with those who find themselves in the role of fatherhood. As a person always being looked to as a guide, it's important for dad to be a model of consistently striving to better themselves. To be the person showing all the kids in their life what happens when determination, hard work, and caring come together in one person.</p>
              <p>The mission of HappyDadFitness is to give dads the tools they need to grow their personal happiness, self-satisfaction, and joy of the world so they may raise children that will mirror the positivity and opportunity that comes with growing up in an environment filled with these feelings.</p>
            </div>
           
            <blockquote>
              <a href="https://twitter.com/happydadfit">Read more from HappyDadFitness</a> on twitter!
            </blockquote>
          </main>
        </div>
      </section>
    </div>
    </Layout>
  );
}