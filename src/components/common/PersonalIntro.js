import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
/**
* Hero component
*
*
*/
const PersonalIntro = ({ text, header, icon, avatar, buttonText, buttonTarget, phoneText, phoneTarget }) => (
    <figure className="personalIntro">
        <img src={ avatar ? avatar : null } alt={`An image of Brandon`}/>
        <h3 dangerouslySetInnerHTML={{__html: header }} />
        <p dangerouslySetInnerHTML={{__html: text }} />
        <div>
            <Link to={buttonTarget}>{ buttonText }</Link>
            <Link to={`sms:+11112223333`}>{ phoneText }</Link>
        </div>
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
}

export default PersonalIntro
