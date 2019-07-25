import React from 'react'
import Link from 'gatsby-link'

import { rhythm, scale } from '../utils/typography'

import '../sass/s.scss'

import logo from '../assets/logo.svg'
import movie from '../assets/covers/movie.jpg'

const Watching = ({ children }) => (
    <div className="content-wrapper consumer-page">
      <h1>Notes on the Movies, Tutorials, Documentaries, and Shows I've Watched</h1>
      <section className="consumer-container">
        <h2>2019</h2>
        <ul className="consumer-grid">
          <li className="movie-cover">
            <div className="cover">
              <img src={movie} alt="cover" />
            </div>
            <div className="book-info">
              <progress max="100" value="30"></progress>
              <p className="book-progress in-progress">In Progress</p>
              <h3>Title of Book</h3>
              <p>Lorem ipsum dolor amet leggings chillwave jean shorts, raclette unicorn pitchfork kombucha biodiesel. Kogi venmo selvage chicharrones. Hella intelligentsia you probably haven't heard of them raclette banh mi palo santo tousled pok pok austin small batch mixtape vice green juice bushwick.</p>
            </div>
          </li>

          <li className="movie-cover">
            <div className="cover">
              <img src={movie} alt="cover" />
            </div>
            <div className="book-info">
              <progress max="100" value="30"></progress>
              <p className="book-progress in-progress">In Progress</p>
              <h3>Title of Book</h3>
              <p>Lorem ipsum dolor amet leggings chillwave jean shorts, raclette unicorn pitchfork kombucha biodiesel. Kogi venmo selvage chicharrones. Hella intelligentsia you probably haven't heard of them raclette banh mi palo santo tousled pok pok austin small batch mixtape vice green juice bushwick.</p>
            </div>
          </li>

          <li className="movie-cover">
            <div className="cover">
              <img src={movie} alt="cover" />
            </div>
            <div className="book-info">
              <progress max="100" value="30"></progress>
              <p className="book-progress in-progress">In Progress</p>
              <h3>Title of Book</h3>
              <p>Lorem ipsum dolor amet leggings chillwave jean shorts, raclette unicorn pitchfork kombucha biodiesel. Kogi venmo selvage chicharrones. Hella intelligentsia you probably haven't heard of them raclette banh mi palo santo tousled pok pok austin small batch mixtape vice green juice bushwick.</p>
            </div>
          </li>

          <li className="movie-cover">
            <div className="cover">
              <img src={movie} alt="cover" />
            </div>
            <div className="book-info">
              <progress max="100" value="30"></progress>
              <p className="book-progress in-progress">In Progress</p>
              <h3>Title of Book</h3>
              <p>Lorem ipsum dolor amet leggings chillwave jean shorts, raclette unicorn pitchfork kombucha biodiesel. Kogi venmo selvage chicharrones. Hella intelligentsia you probably haven't heard of them raclette banh mi palo santo tousled pok pok austin small batch mixtape vice green juice bushwick.</p>
            </div>
          </li>

          <li className="movie-cover">
            <div className="cover">
              <img src={movie} alt="cover" />
            </div>
            <div className="book-info">
              <progress max="100" value="30"></progress>
              <p className="book-progress in-progress">In Progress</p>
              <h3>Title of Book</h3>
              <p>Lorem ipsum dolor amet leggings chillwave jean shorts, raclette unicorn pitchfork kombucha biodiesel. Kogi venmo selvage chicharrones. Hella intelligentsia you probably haven't heard of them raclette banh mi palo santo tousled pok pok austin small batch mixtape vice green juice bushwick.</p>
            </div>
          </li>

          <li className="movie-cover">
            <div className="cover">
              <img src={movie} alt="cover" />
            </div>
            <div className="book-info">
              <progress max="100" value="30"></progress>
              <p className="book-progress in-progress">In Progress</p>
              <h3>Title of Book</h3>
              <p>Lorem ipsum dolor amet leggings chillwave jean shorts, raclette unicorn pitchfork kombucha biodiesel. Kogi venmo selvage chicharrones. Hella intelligentsia you probably haven't heard of them raclette banh mi palo santo tousled pok pok austin small batch mixtape vice green juice bushwick.</p>
            </div>
          </li>

          <li className="movie-cover">
            <div className="cover">
              <img src={movie} alt="cover" />
            </div>
            <div className="book-info">
              <progress max="100" value="30"></progress>
              <p className="book-progress in-progress">In Progress</p>
              <h3>Title of Book</h3>
              <p>Lorem ipsum dolor amet leggings chillwave jean shorts, raclette unicorn pitchfork kombucha biodiesel. Kogi venmo selvage chicharrones. Hella intelligentsia you probably haven't heard of them raclette banh mi palo santo tousled pok pok austin small batch mixtape vice green juice bushwick.</p>
            </div>
          </li>

          <li className="movie-cover">
            <div className="cover">
              <img src={movie} alt="cover" />
            </div>
            <div className="book-info">
              <progress max="100" value="30"></progress>
              <p className="book-progress in-progress">In Progress</p>
              <h3>Title of Book</h3>
              <p>Lorem ipsum dolor amet leggings chillwave jean shorts, raclette unicorn pitchfork kombucha biodiesel. Kogi venmo selvage chicharrones. Hella intelligentsia you probably haven't heard of them raclette banh mi palo santo tousled pok pok austin small batch mixtape vice green juice bushwick.</p>
            </div>
          </li>

          <li className="movie-cover">
            <div className="cover">
              <img src={movie} alt="cover" />
            </div>
            <div className="book-info">
              <progress max="100" value="30"></progress>
              <p className="book-progress in-progress">In Progress</p>
              <h3>Title of Book</h3>
              <p>Lorem ipsum dolor amet leggings chillwave jean shorts, raclette unicorn pitchfork kombucha biodiesel. Kogi venmo selvage chicharrones. Hella intelligentsia you probably haven't heard of them raclette banh mi palo santo tousled pok pok austin small batch mixtape vice green juice bushwick.</p>
            </div>
          </li>

        </ul>

      </section>
    </div>
)

export default Watching