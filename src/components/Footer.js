import React from 'react'

// Import typefaces

class Footer extends React.Component {
  render() {
    const dt = new Date();
    const thisyear = dt.getFullYear();
    return (
      <footer>
        <p>Copyright {thisyear} <a href="about" title="About Brandon Brown">Brandon Brown</a></p>
        <p><a href="mailto:info@bybrandonbrown.com" title="Contact Brandon through email">Contact Me</a></p>
      </footer>
    )
  }
}

export default Footer
