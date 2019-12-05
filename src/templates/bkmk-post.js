import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import get from 'lodash/get'

import Bio from '../components/Bio'
import { rhythm, scale } from '../utils/typography'

class BkmkPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const { previous, next } = this.props.pathContext
    console.log(post)
    return (
      <article className="content-wrapper creator-page post-page">
      <div className="post-title">
        <h1
            style={{
              ...scale(1.25)
            }}
          >{post.frontmatter.title}
        </h1>
        <p className="category">Shared in {post.frontmatter.category} on {post.frontmatter.date}</p>
      </div>
      <div className="post">
        <Helmet
          title={`${post.frontmatter.title} | ${siteTitle}`}
          />
        <div
          dangerouslySetInnerHTML={{ __html: post.html }}
          style={{
            ...scale(.15),

          }}
          />
        </div>


        <div>

          <ul
            className="postnav"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              listStyle: 'none',
              padding: 0,
            }}
          >
            {previous && (
              <li>
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              </li>
            )}

            {next && (
              <li>
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              </li>
            )}
          </ul>
      </div>
      </article>
    )
  }
}

export default BkmkPostTemplate

export const pageQuery = graphql`
  query BkmkPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        category
      }
      
    }
  }
`
