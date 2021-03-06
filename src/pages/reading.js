import React from 'react'
// import Link from 'gatsby-link'
import { Helmet } from "react-helmet"

// import { rhythm, scale } from '../utils/typography'

import '../sass/s.scss'

// import logo from '../assets/logo.svg'
import cover from '../assets/covers/zerotoone.jpg'
import Layout from "../components/layout"

const Reading = ({ children }) => (
  <Layout>
  <Helmet>
          <meta charSet="utf-8" />
          <title>Reading</title>
          <link rel="canonical" href="https://bybrandonbrown.com/reading" />
    </Helmet>
    <div className="content-wrapper consumer-page">
      <h1>Notes on the Books, Articles, and Blogs I've Read</h1>
      <section className="consumer-container">
        <h2>2019</h2>
        <ul className="consumer-grid">
          <li>
            <div className="cover">
              <img src={cover} alt="cover" />
            </div>
            <div className="book-info">
              <progress max="100" value="100"></progress>
              <p className="book-progress">Completed</p>
              <h3>Zero To One</h3>
              <p>Peter Thiel with Blake Masters</p>
            </div>
          </li>
        </ul>

      </section>
    </div>
    </Layout>
)

export default Reading
