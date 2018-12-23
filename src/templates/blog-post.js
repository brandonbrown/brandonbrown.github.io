import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import get from 'lodash/get'

import Bio from '../components/Bio'
import { rhythm, scale } from '../utils/typography'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const { previous, next } = this.props.pathContext
    console.log(post)
    return (
      <article>
      <div className="post-title">
        <h1
            style={{
              ...scale(1.25),
              marginBottom: rhythm(6),
              marginTop: rhythm(1.5),
              fontFamily:'font-black'
            }}
          >{post.frontmatter.title}<span
            className="category"
            >{post.frontmatter.category}</span></h1>
        
        </div>
      <div className="post">
        <Helmet
          title={`${post.frontmatter.title} | ${siteTitle}`} 
          />
        
        <p
          style={{
            ...scale(-1 / 5),
            display: 'block',
            marginBottom: rhythm(1),
            marginTop: rhythm(-1),
            color: 'hsla(0,0%,100%,.5)'
          }}
        >
          {post.frontmatter.date}
          
        </p>
        <div
          dangerouslySetInnerHTML={{ __html: post.html }}
          style={{
            ...scale(.15),

          }}
          />
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        </div>
        
        
        <div>
          <Bio />

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

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
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
