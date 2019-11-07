import React from 'react'
import Link from 'gatsby-link'

import { rhythm, scale } from '../utils/typography'

import '../sass/s.scss'

import logo from '../assets/logo.svg'
import cover from '../assets/covers/zerotoone.jpg'

const Reading = ({ children }) => (
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
              <progress max="100" value="30"></progress>
              <p className="book-progress in-progress">In Progress</p>
              <h3>Title of Book</h3>
              <p>Lorem ipsum dolor amet leggings chillwave jean shorts, raclette unicorn pitchfork kombucha biodiesel. Kogi venmo selvage chicharrones. Hella intelligentsia you probably haven't heard of them raclette banh mi palo santo tousled pok pok austin small batch mixtape vice green juice bushwick.</p>
            </div>
          </li>
          <li>
            <div className="cover">
              <img src={cover} alt="cover" />
            </div>
            <div className="book-info">
              <progress max="100" value="20"></progress>
              <p className="book-progress abandoned">Abandoned</p>
              <h3>Title of Book</h3>
              <p>Tattooed schlitz raw denim iceland kale chips. Pitchfork sartorial shoreditch occupy, hoodie salvia la croix ennui scenester. Tbh stumptown intelligentsia, yr etsy poke kombucha four dollar toast drinking vinegar celiac. Lumbersexual offal viral semiotics DIY chillwave knausgaard jean shorts flexitarian art party copper mug 90's everyday carry kombucha actually.</p>
            </div>
          </li>
          <li>
            <div className="cover">
              <img src={cover} alt="cover" />
            </div>
            <div className="book-info">
              <progress max="100" value="100"></progress>
              <p className="book-progress complete">Complete</p>
              <h3>Title of Book</h3>
              <p>Small batch VHS irony, offal occupy hashtag selvage williamsburg shaman edison bulb. Aesthetic hella synth plaid blue bottle lyft. Live-edge try-hard lumbersexual banjo master cleanse helvetica trust fund vegan. Celiac poutine quinoa selvage mixtape bicycle rights.</p>
            </div>
          </li>
          <li>
            <div className="cover">
              <img src={cover} alt="cover" />
            </div>
            <div className="book-info">
              <progress max="100" value="100"></progress>
              <p className="book-progress complete">Complete</p>
              <h3>Title of Book</h3>
              <p>Small batch VHS irony, offal occupy hashtag selvage williamsburg shaman edison bulb. Aesthetic hella synth plaid blue bottle lyft. Live-edge try-hard lumbersexual banjo master cleanse helvetica trust fund vegan. Celiac poutine quinoa selvage mixtape bicycle rights.</p>
            </div>
          </li>
          <li>
            <div className="cover">
              <img src={cover} alt="cover" />
            </div>
            <div className="book-info">
              <progress max="100" value="100"></progress>
              <p className="book-progress complete">Complete</p>
              <h3>Title of Book</h3>
              <p>Small batch VHS irony, offal occupy hashtag selvage williamsburg shaman edison bulb. Aesthetic hella synth plaid blue bottle lyft. Live-edge try-hard lumbersexual banjo master cleanse helvetica trust fund vegan. Celiac poutine quinoa selvage mixtape bicycle rights.</p>
            </div>
          </li>
          <li>
            <div className="cover">
              <img src={cover} alt="cover" />
            </div>
            <div className="book-info">
              <progress max="100" value="100"></progress>
              <p className="book-progress complete">Complete</p>
              <h3>Title of Book</h3>
              <p>Small batch VHS irony, offal occupy hashtag selvage williamsburg shaman edison bulb. Aesthetic hella synth plaid blue bottle lyft. Live-edge try-hard lumbersexual banjo master cleanse helvetica trust fund vegan. Celiac poutine quinoa selvage mixtape bicycle rights.</p>
            </div>
          </li>
          <li>
            <div className="cover">
              <img src={cover} alt="cover" />
            </div>
            <div className="book-info">
              <progress max="100" value="100"></progress>
              <p className="book-progress complete">Complete</p>
              <h3>Title of Book</h3>
              <p>Small batch VHS ironys.</p>
            </div>
          </li>
          <li>
            <div className="cover">
              <img src={cover} alt="cover" />
            </div>
            <div className="book-info">
              <progress max="100" value="100"></progress>
              <p className="book-progress complete">Complete</p>
              <h3>Title of Book</h3>
              <p>Small batch VHS irony, offal occupy hashtag selvage williamsburg shaman edison bulb. Aesthetic hella synth plaid blue bottle lyft. Live-edge try-hard lumbersexual banjo master cleanse helvetica trust fund vegan. Celiac poutine quinoa selvage mixtape bicycle rights.</p>
            </div>
          </li>
          <li>
            <div className="cover">
              <img src={cover} alt="cover" />
            </div>
            <div className="book-info">
              <progress max="100" value="100"></progress>
              <p className="book-progress complete">Complete</p>
              <h3>Title of Book</h3>
              <p>Small batch VHS irony, offal occupy hashtag selvage williamsburg shaman edison bulb. Aesthetic hella synth plaid blue bottle lyft. Live-edge try-hard lumbersexual banjo master cleanse helvetica trust fund vegan. Celiac poutine quinoa selvage mixtape bicycle rights.</p>
            </div>
          </li>
          <li>
            <div className="cover">
              <img src={cover} alt="cover" />
            </div>
            <div className="book-info">
              <progress max="100" value="100"></progress>
              <p className="book-progress complete">Complete</p>
              <h3>Title of Book</h3>
              <p>Small batch VHS irony, offal occupy hashtag selvage williamsburg shaman edison bulb. Aesthetic hella synth plaid blue bottle lyft. Live-edge try-hard lumbersexual banjo master cleanse helvetica trust fund vegan. Celiac poutine quinoa selvage mixtape bicycle rights.</p>
            </div>
          </li>
          <li>
            <div className="cover">
              <img src={cover} alt="cover" />
            </div>
            <div className="book-info">
              <progress max="100" value="100"></progress>
              <p className="book-progress complete">Complete</p>
              <h3>Title of Book</h3>
              <p>Small batch VHS irony, offal occupy hashtag selvage williamsburg shaman edison bulb. Aesthetic hella synth plaid blue bottle lyft. Live-edge try-hard lumbersexual banjo master cleanse helvetica trust fund vegan. Celiac poutine quinoa selvage mixtape bicycle rights.</p>
            </div>
          </li>
          <li>
            <div className="cover">
              <img src={cover} alt="cover" />
            </div>
            <div className="book-info">
              <progress max="100" value="100"></progress>
              <p className="book-progress complete">Complete</p>
              <h3>Title of Book</h3>
              <p>Small batch VHS irony, offal occupy hashtag selvage williamsburg shaman edison bulb. Aesthetic hella synth plaid blue bottle lyft. Live-edge try-hard lumbersexual banjo master cleanse helvetica trust fund vegan. Celiac poutine quinoa selvage mixtape bicycle rights.</p>
            </div>
          </li>
          <li>
            <div className="cover">
              <img src={cover} alt="cover" />
            </div>
            <div className="book-info">
              <progress max="100" value="100"></progress>
              <p className="book-progress complete">Complete</p>
              <h3>Title of Book</h3>
              <p>Small batch VHS irony, offal occupy hashtag selvage williamsburg shaman edison bulb. Aesthetic hella synth plaid blue bottle lyft. Live-edge try-hard lumbersexual banjo master cleanse helvetica trust fund vegan. Celiac poutine quinoa selvage mixtape bicycle rights.</p>
            </div>
          </li>
          <li>
            <div className="cover">
              <img src={cover} alt="cover" />
            </div>
            <div className="book-info">
              <progress max="100" value="100"></progress>
              <p className="book-progress complete">Complete</p>
              <h3>Title of Book</h3>
              <p>Small batch VHS irony, offal occupy hashtag selvage williamsburg shaman edison bulb. Aesthetic hella synth plaid blue bottle lyft. Live-edge try-hard lumbersexual banjo master cleanse helvetica trust fund vegan. Celiac poutine quinoa selvage mixtape bicycle rights.</p>
            </div>
          </li>
        </ul>

      </section>
    </div>
)

export default Reading
