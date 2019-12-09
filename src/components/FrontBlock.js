import React from 'react'
import Link from 'gatsby-link'
// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import { rhythm } from '../utils/typography'

export default class FrontBlock extends React.Component {
  render() {
    const writingContent = this.props.writingContent
    let h2Content =
      <h2 style={{
        color: `${this.props.textColor}`,
        fontFamily: 'hk_groteskregular',
        lineHeight: '1.45rem'
      }}>{this.props.mainContent}</h2>

    if(writingContent){
      h2Content = writingContent.filter(post => post.node.frontmatter.title.length > 0)
             .map(({ node: post }) => {
               return (
                 <h2 style={{
                   color: `${this.props.textColor}`,
                   marginTop: '5.45rem',
                   fontFamily: 'hk_groteskbold'
                 }}>
                    <Link style={{
                      color: `${this.props.textColor}`,
                      textTransform: 'uppercase'
                    }} to={`writing/${post.frontmatter.path}`}>{post.frontmatter.title}</Link>
                    <br /><br />

                    <span style={{
                      color: `${this.props.textColor}`,
                      fontFamily: 'hk_groteskregular',
                      lineHeight: '1.45rem'
                    }}>{post.excerpt}</span>

                 </h2>
               );
             })
    }

    const textColor = this.props.linkTextColor ? this.props.linkTextColor : this.props.textColor

    let linkContent =
      <Link className="frontBlockLink" style={{
        color: `${textColor}`,
        backgroundColor: `${this.props.linkBackground}`
      }} to={this.props.link}>{this.props.linkText}</Link>

    if(this.props.category === "Personal Training"){
      linkContent =
        <a className="frontBlockLink" style={{
          color: `${textColor}`,
          backgroundColor: `${this.props.linkBackground}`
        }} href="https://minmaxfit.com">{this.props.linkText}</a>
    }
    return (
      <section
        className="featuredSection"
        style={{
          display: 'flex',
          backgroundColor: `${this.props.backgroundColor}`
        }}
      >
        <main>
          <header>
            <img
              className="frontBlockImg"
              src={this.props.cornerImage}
              alt="Hello!"
              style={{
                width: `${this.props.imgWidth}`,
                height: `${this.props.imgHeight}`,
                top: `${this.props.imgTop}`,
                left: `${this.props.imgLeft}`,

              }}/>
            <h5 style={{
              color: `${this.props.textColor}`
            }}>{this.props.category}</h5>
          </header>
          {h2Content}
          {linkContent}
        </main>
      </section>
    )
  }
}
