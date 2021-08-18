import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
/**
* Hero component
*
*
*/
const PersonalIntro = ({ text, header, icon, avatar, buttonText, buttonTarget, phoneText, phoneTarget, showButtons }) => (
    <figure className="personalIntro">
        <img src={ avatar ? avatar : null } alt={`An image of Brandon`}/>
        <h3 dangerouslySetInnerHTML={{__html: header }} className="hi" />
        <p dangerouslySetInnerHTML={{__html: text }} />
        { showButtons ? <div><Link to={buttonTarget} className="cta-button">{ buttonText }</Link><Link to={`sms:+11112223333`} className="secondary-text">{ phoneText }</Link></div> : null }
        
    </figure>
)

PersonalIntro.defaultProps = {
    text: `Content Text`,
    header: `Header Text`,
    icon: `Hero Icon`,
    avatar: `Avatar`,
    buttonText: `Content Text`,
    buttonTarget: `Content Text`,
    phoneText: `Content Text`,
    phoneTarget: `Content Text`,
    showButtons: true,
}

PersonalIntro.propTypes = {
    text: PropTypes.string,
    header: PropTypes.string,
    icon: PropTypes.string,
    avatar: PropTypes.string,
    buttonText: PropTypes.string,
    buttonTarget: PropTypes.string,
    phoneText: PropTypes.string,
    phoneTarget: PropTypes.string,
    showButtons: PropTypes.bool
}

export default PersonalIntro
