import React from 'react'
// import Link from 'gatsby-link'
//
// import { rhythm, scale } from '../utils/typography'

import '../sass/s.scss'

// import logo from '../assets/logo.svg'
import shelbyss2020 from '../assets/covers/shelbyss2020.png'
import Layout from "../components/layout"

const Watching = ({ children }) => (
  <Layout>
    <div className="content-wrapper consumer-page">
      <h1>Notes on the Movies, Tutorials, Documentaries, and Shows I've Watched</h1>
      <section className="consumer-container">
        <h2>2019</h2>
        <ul className="consumer-grid">
          <li className="movie-cover">
            <div className="cover">
              <img src={shelbyss2020} alt="cover" />
            </div>
            <div className="book-info">
              <progress max="100" value="100"></progress>
              <p className="book-progress">Loved It</p>
              <h3>2020 Shelby Super Snake Review // 800 Horsepower GT500 Killer</h3>
              <p>Runtime: 14:01</p>
            </div>
          </li>

        </ul>

      </section>
    </div>
    </Layout>
)

export default Watching
