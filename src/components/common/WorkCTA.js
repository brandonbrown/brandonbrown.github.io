import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
/**
* Hero component
*
*
*/
const WorkCTA = ({ text, header, icon, image, buttonText, buttonTarget, phoneText, phoneTarget }) => (
    <figure className="personalIntro">
        { icon ? <img src={icon} alt={`Icon`}/> : null }
        { image ? <img src={image} alt={`Brandon at work`}/> : null }
        <h3 dangerouslySetInnerHTML={{__html: header }} />
        {text}
        <aside>[icon] Available for freelance and long-term contracts</aside>
        <div>
            <Link to={buttonTarget}>{ buttonText }</Link>
            <Link to={`sms:+11112223333`}>{ phoneText }</Link>
        </div>
    </figure>
)

WorkCTA.defaultProps = {
    text: <section><p>This</p><p>That</p><p>Those</p></section>,
    header: `Let's Get To Work`,
    icon: `Hero Icon`,
    image: `image`,
    buttonText: `Content Text`,
    buttonTarget: `Content Text`,
    phoneText: `Content Text`,
    phoneTarget: `Content Text`,
}

WorkCTA.propTypes = {
    text: PropTypes.object,
    header: PropTypes.string,
    icon: PropTypes.string,
    image: PropTypes.string,
    buttonText: PropTypes.string,
    buttonTarget: PropTypes.string,
    phoneText: PropTypes.string,
    phoneTarget: PropTypes.string,
}

export default WorkCTA
