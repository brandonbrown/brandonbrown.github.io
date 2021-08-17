import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
/**
* Hero component
*
*
*/
const ContentLargeBlock = ({ text, altText, header, icon, mainImage, buttonText, buttonTarget, phoneText, phoneTarget }) => (
    <figure className="contentLargeBlock">
        { mainImage ?
            <img src={ mainImage } alt={altText}/> :
            null
        }
        <h3 dangerouslySetInnerHTML={{__html: header }} />
        <p dangerouslySetInnerHTML={{__html: text }} />
        { buttonText ?
            <div><Link to={buttonTarget}>{ buttonText }</Link></div> :
            null
        }
    </figure>
)

ContentLargeBlock.defaultProps = {
    text: `ContentLargeBlock Text`,
    altText: `ContentLargeBlock Altext`,
    header: `ContentLargeBlock Header Text`,
    icon: `ContentLargeBlock Hero Icon`,
    mainImage: `ContentLargeBlock Avatar`,
    buttonText: `ContentLargeBlock buttonText`,
    buttonTarget: `ContentLargeBlock buttonTarget`,
    phoneText: `ContentLargeBlock phoneText`,
    phoneTarget: `ContentLargeBlock phoneTarget`,
}

ContentLargeBlock.propTypes = {
    text: PropTypes.string,
    altText: PropTypes.string,
    header: PropTypes.string,
    icon: PropTypes.string,
    mainImage: PropTypes.string,
    buttonText: PropTypes.string,
    buttonTarget: PropTypes.string,
    phoneText: PropTypes.string,
    phoneTarget: PropTypes.string,
}

export default ContentLargeBlock
