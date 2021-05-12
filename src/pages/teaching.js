import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Particles from 'react-particles-js'

import { rhythm, scale } from '../utils/typography'

import '../sass/s.scss'

// import logo from '../assets/logo.svg'
// import square from '../assets/covers/square.jpg'
import Layout from "../components/layout"

export default function Teaching() {
  return (
    <Layout>
    <div className="creator-page teaching">
      <section className="myTeaching">
        <div className="article-wrapper">
          <header>
            <h1>I help designers think deeper, developers comprehend further, shift business perspectives, and support people on their journey to satisfying careers and professional fulfillment.</h1>
            <h2>Find me and the <em>free</em> learning content I've shared across these platforms:</h2>

            <Particles
              width="100%"
              height="100%"
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
                <h3><a href="https://facebook.com/" title="heyinstructor on Facebook">Facebook</a></h3>
              </li>
              <li>
                <h3><a href="https://github.com/brandonbrown" title="Brandon on Github ">Github</a></h3>
              </li>
            </ol>
            <h1>Modern Technology Courses Designed For Your Individual Learning Needs</h1>

            <p>As you start to learn more about the technology behind today's always-growing digital worlds, you also start to see how much you don't know.</p>
            <p>For many, that feeling becomes so overwhelming that they stop before finding that special combination of powerful skill-sets and their own unique life experience and worldviews coming together.</p>
            <p>My goal is to help you through that sense of overwhelm and to give you the tools to continue growing in a meaningful and professional direction.</p>
            <p>We'll achieve this growth together, understanding there are different needs for individual learners. It will never be your fault or short-coming if you can't comprehend a topic. Through the use of different types of content, communication, and 1-on-1 mentoring I will help you to bring your skills up to a fulfilling level and get you heading towards new successes.</p>

            <h4>Upcoming Courses</h4>
            <h3>People Centered Design</h3>
            <p>Great design helps people you'll never meet to solve problems, to simplify the complex, and give them the ability to enjoy life just a little bit more than they otherwise would in a world without your design. This course is designed to show you how to seek out these opportunities to ease people's day to day lives. We'll explore solutions in both the physical and digital worlds and how solutions between the two are becoming more and more common. Most importantly, you'll learn to empathize and understand the lives of different types of people and how asking the right questions may empower more people than you could have ever imagined.</p>
            <blockquote>
              Get a dose of design foundations starting summer 2021. <a href="https://www.twitter.com/heyinstructor/" title="@heyinstructor on twitter">Let me know you're interested in this course!</a>
            </blockquote>

            <h3>An Introduction to Web Development</h3>
            <p>The foundations of the web haven't changed in decades, but they have evolved. In this course we'll discuss the basics of building with web technologies, also known as Front-End Development. We will work directly with HTML, CSS, JavaScript, databases, and servers. We will also examine common problems unique to web design and development such as debugging code, managing code, creating sites that work for different types of devices, and how important standards such as WCAG and security protocols will impact your work. By the end you'll have just enough knowledge to build a simple website and have the ability to share it, too! Additionally, included are lessons on how to use modern workflow helpers to give you a few more tricks for your sleeves.</p>
            <blockquote>
              Learn what it takes to create hand-made websites late 2021. <a href="https://www.twitter.com/heyinstructor/" title="@heyinstructor on twitter">Let me know you're interested in this course!</a>
            </blockquote>

            <h3>User-Experience Design</h3>
            <p>Before you started down the path of learning design, you may have thought it was only making things look <em>"nice"</em>. Quickly you will have learned that most of your time is spent planning, understanding, and wondering why people still love to use <em>"ugly"</em> websites and apps. User Experience Design gives you the tools and systems to build the right features, with the right appearance, for the right people, and at the right time. This course will cover the foundational aspects of research, data analysis, design thinking, how to build prototypes, and how to share this information with stakeholders and other key decision makers.</p>
            <blockquote>
              Learn UX Design with me starting late 2021. <a href="https://www.twitter.com/heyinstructor/" title="@heyinstructor on twitter">Let me know you're interested in this course!</a>
            </blockquote>

            </section>
            <section>
              <h4>Upcoming Micro-Courses</h4>
              <ul>
                <li><h3>Figma And Prototyping Applications</h3></li>
                <li><h3>Building Sites With Webflow</h3></li>
                <li><h3>Basics of Shopify Theme Development</h3></li>
                <li><h3>Run An Empowering Design Sprint</h3></li>
                <li><h3>Make Your Clients' Winners With Brand Strategy</h3></li>
              </ul>
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
