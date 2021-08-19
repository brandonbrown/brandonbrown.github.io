import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Lightning from '../../images/bbb-icon-lightning.svg'
import Available from '../../images/bbb-icon-available.svg'
import AtWork from '../../images/placeholders/9.jpg'
/**
* Hero component
*
*
*/
const WorkCTA = ({ text, header, icon, image, buttonText, buttonTarget, phoneText, phoneTarget, status }) => (
    <figure className="workCTA"> 
        { image ? <img src={image} alt={`Brandon at work`}/> : null }
        <div>
            { icon ? <img src={icon} alt={`Brandon at work`}/> : null }
            <h3 dangerouslySetInnerHTML={{__html: header }} />
            <p>Eligendi a dolor illo qui. Illo debitis et. Aut labore beatae doloremque ut. Perspiciatis eveniet fugiat dolor sint iure nam minus labore ea.</p>
            <p>Dolor dicta velit ea neque occaecati. Pariatur iste amet est debitis ut enim iste nostrum. Doloribus dolores nisi quibusdam quidem aspernatur eos ut repudiandae eius. Autem vitae et. Magnam vero numquam doloribus enim.</p>
            <p>Aut quia maiores mollitia ipsum est modi nemo aspernatur. Temporibus necessitatibus nobis voluptatem pariatur sed. Ea adipisci eligendi occaecati ea molestias magni vel repudiandae ut.</p>
            <aside>{ status ? <img src={status} alt={`Available for hire`}/> : null } Available for freelance and long-term contracts</aside>
            <div>
                <Link to={buttonTarget} className='cta-button'>{ buttonText }</Link>
                <Link to={`sms:+11112223333`} className='secondary-text'>{ phoneText }</Link>
            </div>
        </div>
    </figure>
)

WorkCTA.defaultProps = {
    text: <section><p>This</p><p>That</p><p>Those</p></section>,
    header: `Let's Get To Work`,
    icon: Lightning,
    status: Available,
    image: AtWork,
    buttonText: `Button Text`,
    buttonTarget: `Button Target`,
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
