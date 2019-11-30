import React from 'react'

// Import typefaces

class Newsletter extends React.Component {
  render() {
    const dt = new Date();
    const thisyear = dt.getFullYear();
    return (
      <aside>
        <h5>BKMKS are getting a companion email newsletter!</h5>
        <p>Once a week you'll receive an email with my thoughts on what I've found through the week.</p>
        <iframe width="480" height="320" src="https://brandonbrown.substack.com/embed" frameborder="0" scrolling="no"></iframe>
      </aside>
    )
  }
}

export default Newsletter
