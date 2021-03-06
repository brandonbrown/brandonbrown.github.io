import React from 'react'
import Link from 'gatsby-link'
import { Helmet } from "react-helmet"

// import { rhythm, scale } from '../utils/typography'

import '../sass/s.scss'

import logo from '../assets/logo.svg'
import square from '../assets/covers/square.jpg'
import infinitegame from '../assets/covers/infinitegame.jpg'
import bobiger from '../assets/covers/bobiger.jpg'
import paddle from '../assets/covers/paddle.jpg'
import why from '../assets/covers/why.jpg'
import meaning from '../assets/covers/meaning.jpg'
import dream from '../assets/covers/dream.jpg'
import startupmoney from '../assets/covers/startupmoney.jpg'
import thisismarketing from '../assets/covers/thisismarketing.jpg'
import unfuck from '../assets/covers/unfuck.jpg'
import mission from '../assets/covers/mission.jpg'
import dad from '../assets/covers/dad.jpg'
import capitalist from '../assets/covers/capitalist.jpg'
import coach from '../assets/covers/coach.jpg'
import nudge from '../assets/covers/nudge.jpg'
import body from '../assets/covers/body.jpg'
import radical from '../assets/covers/radical.jpg'
import peak from '../assets/covers/peak.jpg'
import theprogram from '../assets/covers/theprogram.jpg'

import Layout from "../components/layout"

const Listening = ({ children }) => (
  <Layout>
  <Helmet>
          <meta charSet="utf-8" />
          <title>Listening</title>
          <link rel="canonical" href="https://bybrandonbrown.com/listening" />
    </Helmet>
    <div className="content-wrapper consumer-page">
      <h1>Notes on the Audio Books &amp; Podcasts I've Listened To</h1>
      <section className="consumer-container">
        <h2>2020</h2>
        <ul className="consumer-grid">
          <li>
            <div className="cover">
              <img src={theprogram} alt="cover" />
            </div>
            <div className="book-info">
              <progress max="100" value="5"></progress>
              <p className="book-progress in-progress">In Progress</p>
              <h3>The Program: Lessons from Elite Military Units for Creating and Sustaining High-Performance Leaders and Teams</h3>
              <p>Written by Eric Kapitulik and Jake MacDonald and narrated by Shawn Compton</p>
            </div>
          </li>
          <li>
            <div className="cover">
              <img src={peak} alt="cover" />
            </div>
            <div className="book-info">
              <progress max="100" value="5"></progress>
              <p className="book-progress complete">Returned</p>
              <h3>Peak: Secrets From The New Science Of Expertise</h3>
              <p>Written by Robert Pool and Anders Ericsson and narrated by Sean Runnette</p>
            </div>
          </li>
          <li>
            <div className="cover">
              <img src={radical} alt="cover" />
            </div>
            <div className="book-info">
              <progress max="100" value="100"></progress>
              <p className="book-progress complete">Best paired with hard-copy</p>
              <h3>Radical Candor: Fully Revised & Updated Edition: Be a Kick-Ass Boss Without Losing Your Humanity</h3>
              <p>Written by Kim Scott and narrated by Teri Schnaubelt</p>
            </div>
          </li>
        </ul>
        <h2>2019</h2>
        <ul className="consumer-grid">
          <li>
            <div className="cover">
              <img src={body} alt="cover" />
            </div>
            <div className="book-info">
              <progress max="100" value="100"></progress>
              <p className="book-progress complete">Best of 2019</p>
              <h3>The Body: A Guide for Occupants</h3>
              <p>Written and narrated by Bill Bryson</p>
            </div>
          </li>
          <li>
            <div className="cover">
              <img src={infinitegame} alt="cover" />
            </div>
            <div className="book-info">
              <progress max="100" value="15"></progress>
              <p className="book-progress in-progress">In Progress</p>
              <h3>The Infinite Game</h3>
              <p>Simon Sinek takes a deeper look into a concept he's touched in earlier talks and books.</p>
            </div>
          </li>
          <li>
            <div className="cover">
              <img src={bobiger} alt="cover" />
            </div>
            <div className="book-info">
              <progress max="100" value="100"></progress>
              <p className="book-progress complete">Recommended As Audio Book</p>
              <h3>The Ride of a Lifetime</h3>
              <p>The story of Bob Iger's journey to becoming CEO of the Walt Disney Company</p>
            </div>
          </li>
          <li>
            <div className="cover">
              <img src={paddle} alt="cover" />
            </div>
            <div className="book-info">
              <progress max="100" value="100"></progress>
              <p className="book-progress complete">Recommended As Audio Book</p>
              <h3>Paddle Your Own Canoe: One Man's Fundamentals for Delicious Living</h3>
              <p>Nick Offerman uses his special comedic delivery to tell the story of how he has landed in the life he has today.</p>
            </div>
          </li>
          <li>
            <div className="cover">
              <img src={why} alt="cover" />
            </div>
            <div className="book-info">
              <progress max="100" value="100"></progress>
              <p className="book-progress complete">Recommended As Audio Book</p>
              <h3>Start With Why</h3>
              <p>Anyone interested in managing people, leading a group, or understanding what motivates people to take the actions they do should read this book.</p>
            </div>
          </li>
          <li>
            <div className="cover">
              <img src={meaning} alt="cover" />
            </div>
            <div className="book-info">
              <progress max="100" value="10"></progress>
              <p className="book-progress abandoned">Abandoned</p>
              <h3>Man's Search For Meaning</h3>
              <p>So far, as an audibook this is hard to digest. May be more enjoyable as a hard copy book.</p>
            </div>
          </li>
          <li>
            <div className="cover">
              <img src={dream} alt="cover" />
            </div>
            <div className="book-info">
              <progress max="100" value="10"></progress>
              <p className="book-progress abandoned">Abandoned</p>
              <h3>The Dream Machine</h3>
              <p>A look back at how the way we use computers today was envisioned by the people involved with the digital revolution.</p>
            </div>
          </li>
          <li>
            <div className="cover">
              <img src={startupmoney} alt="cover" />
            </div>
            <div className="book-info">
              <progress max="100" value="30"></progress>
              <p className="book-progress in-progress">In Progress</p>
              <h3>Startup Money Made Easy: The Inc. Guide to Every Financial Question About Starting, Running, and Growing Your Business</h3>
              <p>A good guidebook to understanding many of the intricacies of startup finances.</p>
            </div>
          </li>
          <li>
            <div className="cover">
              <img src={thisismarketing} alt="cover" />
            </div>
            <div className="book-info">
              <progress max="100" value="10"></progress>
              <p className="book-progress in-progress">In Progress</p>
              <h3>This Is Marketing: You Can't Be Seen Until You Learn to See </h3>
              <p>Seth Godin's approach to marketing and the value he shares is gold. Hoping this installment continues that.</p>
            </div>
          </li>
          <li>
            <div className="cover">
              <img src={unfuck} alt="cover" />
            </div>
            <div className="book-info">
              <progress max="100" value="100"></progress>
              <p className="book-progress">Recommended As Audio Book</p>
              <h3>Unfu*k Yourself: Get Out of Your Head and into Your Life</h3>
              <p>Some of the best self-help reading I can recommend.</p>
            </div>
          </li>
          <li>
            <div className="cover">
              <img src={mission} alt="cover" />
            </div>
            <div className="book-info">
              <progress max="100" value="100"></progress>
              <p className="book-progress">Recommended As Audio Book</p>
              <h3>The Mission, the Men, and Me: Lessons from a Former Delta Force Commander</h3>
              <p>Amazing stories and insight into the leadership perspectives of an elite military leader. Highly Recommended.</p>
            </div>
          </li>
          <li>
            <div className="cover">
              <img src={dad} alt="cover" />
            </div>
            <div className="book-info">
              <progress max="100" value="100"></progress>
              <p className="book-progress">Recommended As Audio Book</p>
              <h3>The Expectant Dad’s Roadmap: From Dude to New Father and How to Be Prepared for the next 9 Months and After</h3>
              <p>Light listening to help prepare for a baby on the way. Nothing ground breaking that common sense or my wife and mother of 3 didn't already teach me.</p>
            </div>
          </li>
          <li>
            <div className="cover">
              <img src={capitalist} alt="cover" />
            </div>
            <div className="book-info">
              <progress max="100" value="100"></progress>
              <p className="book-progress">Recommended As Audio Book</p>
              <h3>How to Be a Capitalist Without Any Capital: The Four Rules You Must Break to Get Rich</h3>
              <p>Entertaining in presentation, but enough time has passed that I've forgotten the message from this book. Worth a re-listen.</p>
            </div>
          </li>
          <li>
            <div className="cover">
              <img src={coach} alt="cover" />
            </div>
            <div className="book-info">
              <progress max="100" value="100"></progress>
              <p className="book-progress">Recommended As Audio Book</p>
              <h3>Trillion Dollar Coach: The Leadership Playbook of Silicon Valley's Bill Campbell</h3>
              <p>So good it made me regret not taking the opportunity to work on the West Coast and potentially bump into people like Bill Campbell.</p>
            </div>
          </li>
          <li>
            <div className="cover">
              <img src={nudge} alt="cover" />
            </div>
            <div className="book-info">
              <progress max="100" value="45"></progress>
              <p className="book-progress">Recommended As Audio Book</p>
              <h3>Nudge: Improving Decisions About Health, Wealth, and Happiness</h3>
              <p>Required reading for anyone in the businesses of design, product, or consumer facing services.</p>
            </div>
          </li>
        </ul>

      </section>
    </div>
    </Layout>
)

export default Listening
