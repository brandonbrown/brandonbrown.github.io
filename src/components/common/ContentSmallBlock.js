import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import TextParagraphBlock from './TextParagraphBlock'

/**
* Hero component
*
*
*/
const ContentSmallBlock = ({ text, altText, header, headerType, hideImage, icon, mainImage, buttonText, buttonTarget, phoneText, phoneTarget }) => (
    <figure className="contentSmallBlock">
        { mainImage && !hideImage ?
            <img src={ mainImage } alt={altText}/> :
            null
        }
        <TextParagraphBlock
            header={header}
            headerType={`h4`}
            text={text}
        />
    </figure>
)

ContentSmallBlock.defaultProps = {
    text: `Content Small Block Text`,
    altText: `Content Small Block Altext`,
    header: `Content Small Block Header Text`,
    headerType: `h3`,
    icon: `Content Small Block Hero Icon`,
    mainImage: null,
    buttonText: `Content Small lock buttonText`,
    buttonTarget: `Content Small Block buttonTarget`,
    phoneText: `Content Small Block phoneText`,
    phoneTarget: `Content Small Block phoneTarget`,
    hideImage: false,
}

ContentSmallBlock.propTypes = {
    text: PropTypes.string,
    altText: PropTypes.string,
    header: PropTypes.string,
    headerType: PropTypes.string,
    icon: PropTypes.string,
    mainImage: PropTypes.string,
    buttonText: PropTypes.string,
    buttonTarget: PropTypes.string,
    phoneText: PropTypes.string,
    phoneTarget: PropTypes.string,
    hideImage: PropTypes.bool,
}

export default ContentSmallBlock
