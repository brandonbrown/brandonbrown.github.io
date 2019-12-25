import React from 'react'
import hello from '../assets/indexImages/hello.gif'

// Import typefaces

class Footer extends React.Component {
  render() {
    const dt = new Date();
    const thisyear = dt.getFullYear();
    return (
      <footer>
        <div className="content-wrapper">

          <section className="personal-info">
            <img className="helloImg" src={hello} alt="Hello!" />
            <h1 className="introduction">
              I'm Brandon, a Design &amp; Web Development Educator highly interested in using technology to make the health & fitness industries stronger through meaningful applications and personalized solutions.
            </h1>
            <h6>You will also find me on these networks:</h6>
            <ul className="sociallinks">
              <li>twitter <span>&mdash;</span> <a href="https://twitter.com/bybrandonbrown" title="Follow Brandon on twitter">@bybrandonbrown</a></li>
              <li>dribbble <span>&mdash;</span> <a href="https://dribbble.com/brandonbrown" title="Follow Brandon on dribbble">@brandonbrown</a></li>
              <li>medium <span>&mdash;</span> <a href="https://medium.com/@bybrandonbrown" title="Folow Brandon on Medium">@bybrandonbrown</a></li>
              <li>github <span>&mdash;</span> <a href="http://github.com/brandonbrown" title="Follow Brandon on GitHub">@brandonbrown</a></li>
              <li>instagram <span>&mdash;</span> <a href="https://instagram.com/heyinstructor" title="Follow Brandon on instagram">@heyinstructor</a></li>
              <li>youtube <span>&mdash;</span> <a href="#">@PointLinePlaneXYZ</a></li>
              <li>email <span>&mdash;</span> <a href="mailto:hello@bybrandonbrown.com">hello@bybrandonbrown.com</a></li>
            </ul>
          </section>
          <section className="footerDetails">
            <p>Copyright {thisyear} <a href="about" title="About Brandon Brown">Brandon Brown</a></p>
            <p><a href="mailto:info@bybrandonbrown.com" title="Contact Brandon through email">Contact</a></p>
          </section>
        </div>

      </footer>
    )
  }
}

export default Footer
