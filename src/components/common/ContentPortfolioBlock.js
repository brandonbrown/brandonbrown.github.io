import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
/**
* Hero component
*
*
*/
const ContentPortfolioBlock = ({ key, portfolio }) => ( 
    <article key={key} className="contentPortfolioBlock">
        <aside>
            <div>
                <img src={portfolio.coverImage} />
            </div>
            <ul>
                {portfolio.images.map(image => <li key={key + portfolio.title}><img src={image.url} /></li>)}
            </ul>
        </aside>
        <div>
            <h2>{portfolio.title}</h2>
            {portfolio.intro}
            <h4>Roles &amp; Responsibilities</h4>
            <ul>
                {portfolio.roles.map(role => <li key={`key-${role}`}>{role}</li>)}
            </ul>
            <Link to={portfolio.link} className="cta-button">Take a closer look</Link>
        </div>
    </article>
)

ContentPortfolioBlock.defaultProps = {
    key: null,
    portfolio: null,
}

ContentPortfolioBlock.propTypes = {
    key: PropTypes.string,
    portfolio: PropTypes.object,
}

export default ContentPortfolioBlock
