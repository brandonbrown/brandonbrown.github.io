import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
/**
* Hero component
*
*
*/
const Hero = ({ text, icon }) => (
    <section className="hero">
        <img src={ icon ? icon : null } alt={`Icon for Hero`}/>
        <h2 dangerouslySetInnerHTML={{__html: text }} />
    </section>
)

Hero.defaultProps = {
    text: `Hero Text`,
    icon: `Hero Icon`,
}

Hero.propTypes = {
    text: PropTypes.string,
    icon: PropTypes.string,
}

export default Hero
