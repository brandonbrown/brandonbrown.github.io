import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import TextParagraphBlock from './TextParagraphBlock'

/**
* Hero component
*
*
*/
const ContentMediumBlock = ({ text, altText, header, headerType, icon, mainImage, buttonText, buttonTarget, phoneText, phoneTarget }) => (
    <figure className="contentMediumBlock">
        { mainImage ?
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

ContentMediumBlock.defaultProps = {
    text: `Content Medium Block Text`,
    altText: `Content Medium Block Altext`,
    header: `Content Medium Block Header Text`,
    headerType: `h3`,
    icon: `Content Medium Block Hero Icon`,
    mainImage: `Content Medium Block Avatar`,
    buttonText: `Content Medium lock buttonText`,
    buttonTarget: `Content Medium Block buttonTarget`,
    phoneText: `Content Medium Block phoneText`,
    phoneTarget: `Content Medium Block phoneTarget`,
}

ContentMediumBlock.propTypes = {
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
}

export default ContentMediumBlock
