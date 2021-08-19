import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
/**
* Hero component
*
*
*/
const TextParagraphBlock = ({ text, header, headerType, linkText, linkTarget }) => {
    let renderHeader
    switch (headerType) {
    case `h1`:
        renderHeader = <h1 dangerouslySetInnerHTML={{__html: header }} />
        break
    case `h2`:
        renderHeader = <h2 dangerouslySetInnerHTML={{__html: header }} />
        break
    case `h3`:
        renderHeader = <h3 dangerouslySetInnerHTML={{__html: header }} />
        break
    case `h4`:
        renderHeader = <h4 dangerouslySetInnerHTML={{__html: header }} />
        break
    case `h5`:
        renderHeader = <h5 dangerouslySetInnerHTML={{__html: header }} />
        break
    case `h6`:
        renderHeader = <h6 dangerouslySetInnerHTML={{__html: header }} />
        break
    default:
        null
    }

    return (
        <>
            { renderHeader ?
                <header>
                    {renderHeader}
                    { linkTarget ?
                        <Link to={linkTarget}>{linkText}</Link> :
                        null
                    }
                    { text ?
                        <p dangerouslySetInnerHTML={{__html: text }} /> :
                        null
                    }
                </header> :
                null
            }
        </>
    )
}

TextParagraphBlock.defaultProps = {
    text: `Content Text`,
    header: `Header Text`,
    headerType: `h3`,
    linkText: `See More`,
    linkTarget: null,
}

TextParagraphBlock.propTypes = {
    text: PropTypes.string.isRequired,
    header: PropTypes.string.isRequired,
    headerType: PropTypes.string.isRequired,
    linkText: PropTypes.string,
    linkTarget: PropTypes.string,
}

export default TextParagraphBlock
