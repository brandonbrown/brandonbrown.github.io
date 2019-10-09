import React from 'react'
import Link from 'gatsby-link'

import { rhythm, scale } from '../utils/typography'

import '../sass/s.scss'

import logo from '../assets/logo.svg'
import square from '../assets/covers/square.jpg'

const Sharing = ({ children }) => (
    <div className="content-wrapper consumer-page">
      <h1>A Collection of Resources and Lists of Interest</h1>
      <section className="consumer-container consumer-container-lists">

        <div className="consumer-grid">
          <div className="resources-list-container">
          <h2>Web industry people to know</h2>
          <ul className="resources-list">
            <li>
                <a href="https://twitter.com/chriscoyier" title="Chris Coyier on twitter" target="_blank">
                  <h3>Chris Coyier</h3>
                  <p>Known for css-tricks.com, codepen.io, shoptalkshow podcast, and for being a great guy!</p>
                </a>
            </li>
            <li>
                <a href="https://twitter.com/zeldman" title="Jeffrey Zeldman on twitter" target="_blank">
                  <h3>Jeffrey Zeldman</h3>
                  <p>Known for alistapart, abookapart, aneventapart, and driving Web Standards so we can all have great jobs in the web industry.</p>
                </a>
            </li>
            <li>
                <a href="https://twitter.com/SaraSoueidan" title="Sara Soueidan on twitter" target="_blank">
                  <h3>Sara Soueidan</h3>
                  <p>Known for her workshops on accessibility and impressive body of work as a freelance developer.</p>
                </a>
            </li>
            <li>
                <a href="https://twitter.com/davidwalshblog" title="David Walsh on twitter" target="_blank">
                  <h3>David Walsh</h3>
                  <p>Known for his long running blog on developing for the web and an amazing avatar that hasn't changed since <em>web 2.0</em>.</p>
                </a>
            </li>
            <li>
                <a href="https://twitter.com/wesbos" title="Wes Bos on twitter" target="_blank">
                  <h3>Wes Bos</h3>
                  <p>Known for his incredible development courses, podcast, and teaching workshops on both sides of the USA & Canada border.</p>
                </a>
            </li>

          </ul>
          </div>

          <div className="resources-list-container">
          <h2>Web Development Basics</h2>
          <ul className="resources-list">
            <li>
                <a href="#">
                  <h3>Title of Book</h3>
                  <p>Lorem ipsum dolor amet leggings chillwave jean shorts.</p>
                </a>
            </li>
            <li>
                <a href="#">
                  <h3>Title of Book</h3>
                  <p>Lorem ipsum dolor amet leggings chillwave jean shorts.</p>
                </a>
            </li>
            <li>
                <a href="#">
                  <h3>Title of Book</h3>
                  <p>Lorem ipsum dolor amet leggings chillwave jean shorts.</p>
                </a>
            </li>
            <li>
                <a href="#">
                  <h3>Title of Book</h3>
                  <p>Lorem ipsum dolor amet leggings chillwave jean shorts.</p>
                </a>
            </li>
            <li>
                <a href="#">
                  <h3>Title of Book</h3>
                  <p>Lorem ipsum dolor amet leggings chillwave jean shorts.</p>
                </a>
            </li>
            <li>
                <a href="#">
                  <h3>Title of Book</h3>
                  <p>Lorem ipsum dolor amet leggings chillwave jean shorts.</p>
                </a>
            </li>
          </ul>
          </div>

          <div className="resources-list-container">
          <h2>Front-End Development</h2>
          <ul className="resources-list">
            <li>
                <a href="#">
                  <h3>Title of Book</h3>
                  <p>Lorem ipsum dolor amet leggings chillwave jean shorts.</p>
                </a>
            </li>
            <li>
                <a href="#">
                  <h3>Title of Book</h3>
                  <p>Lorem ipsum dolor amet leggings chillwave jean shorts.</p>
                </a>
            </li>
            <li>
                <a href="#">
                  <h3>Title of Book</h3>
                  <p>Lorem ipsum dolor amet leggings chillwave jean shorts.</p>
                </a>
            </li>
            <li>
                <a href="#">
                  <h3>Title of Book</h3>
                  <p>Lorem ipsum dolor amet leggings chillwave jean shorts.</p>
                </a>
            </li>
            <li>
                <a href="#">
                  <h3>Title of Book</h3>
                  <p>Lorem ipsum dolor amet leggings chillwave jean shorts.</p>
                </a>
            </li>
            <li>
                <a href="#">
                  <h3>Title of Book</h3>
                  <p>Lorem ipsum dolor amet leggings chillwave jean shorts.</p>
                </a>
            </li>
          </ul>
          </div>

        </div>




      </section>
    </div>
)

export default Sharing
