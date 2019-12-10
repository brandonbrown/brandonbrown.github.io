import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Particles from 'react-particles-js'

import { rhythm, scale } from '../utils/typography'

import '../sass/s.scss'

import logo from '../assets/logo.svg'
import square from '../assets/covers/square.jpg'

export default function Teaching() {
  return (
    <div className="creator-page teaching">
      <section className="myTeaching">
        <div className="article-wrapper">
          <header>
            <h1>I help designers think deeper, developers comprehend further, and support people on their journey to better health and greater self-autonomy.</h1>
            <h2>To be an effective teacher, you must meet people where they are naturally comfortable, personally safe, happy, and energized to learn. This is why you'll find me on various platforms:</h2>

            <Particles
              params={{
          	    "particles": {
          	        "number": {
          	            "value": 50
          	        },
          	        "size": {
          	            "value": 3
          	        },
                    "color":{
                        "value": "#382154",
                        "opacity": .7
                    },
                    "line_linked": {
          	            "enable": true,
          	            "opacity": .25,
                        "color": "#382154"
          	        },
                    "move": {
        	            "speed": 0.5
        	        },
          	    },
                "interactivity": {
                    "events": {
                        "onclick": {
                            "enable": true,
                            "mode": "push"
                        }
                    },
                    "modes": {
                        "push": {
                            "particles_nb": 1
                        }
                    }
                },
                "retina_detect": true
          	}} />
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
            <ol className="platforms">
              <li>
                <h3><a href="https://youtube.com/" title="heyinstructor on Youtube">YouTube</a></h3>
              </li>
              <li>
                <h3><a href="https://www.instagram.com/heyinstructor/" title="@heyinstructor on Instagram">Instagram</a></h3>
              </li>
              <li>
                <h3><a href="https://www.twitter.com/heyinstructor/" title="@heyinstructor on twitter">Twitter</a></h3>
              </li>
              <li>
                <h3><a href="https://Facebook.com/" title="heyinstructor on Facebook">Facebook</a></h3>
              </li>
              <li>
                <h3><a href="https://medium.com/@bybrandonbrown" title="brandon on medium">Medium</a></h3>
              </li>
            </ol>
            <h3>The Best Way To Learn&mdash;Is To Teach</h3>
            <blockquote>
              Course Previews Coming Soon!
            </blockquote>

            </section>
          </main>


        </div>
      </section>
      {/*<section className="education">
        <article>
          <header>
            <h1><span>Education Is</span> Falling Behind</h1>
            <h2>How we should all play a part in its next evolution</h2>
          </header>
          <main>
          <div className="article-right">
            <p>With platforms like these, the internet is finally fulfilling a long-held promise: Teach the masses. Education is no longer withheld behind expensive doors and years of life. The information, connections, and answers are avilable to anyone who has the will to seek them out.</p>
            <p>Everyone is a student for life in the future of education.</p>
          </div>
          <div className="article-left">
            <p></p>
          </div>
            <ol>
              <li>
                <h3>Meet people where they are comfortable happy</h3>
              </li>
              <li>
                <h3>Share with people but do not lecture to an audience</h3>
              </li>
              <li>
                <h3>One-to-one time is the spark of organic and exponential growth</h3>
              </li>
              <li>
                <h3>Focus on removing noise around a topic</h3>
              </li>
              <li>
                <h3>Teach what you love</h3>
              </li>
            </ol>
          </main>
        </article>
      </section>
      */}
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
