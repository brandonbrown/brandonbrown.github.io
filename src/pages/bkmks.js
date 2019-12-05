import React from 'react'
import Link from 'gatsby-link'

import { rhythm, scale } from '../utils/typography'

import '../sass/s.scss'

import logo from '../assets/logo.svg'
import square from '../assets/covers/square.jpg'

export default function Bkmks({ data }) {
  const { edges: bkmks } = data.allMarkdownRemark;
  return (
    <div className="content-wrapper creator-page">
    { bkmks.filter(post => post.node.frontmatter.title.length > 0)
           .map(({ node: post }) => {
             return (
               <article className="blog-post-preview" key={post.id}>
                 <h4 className="post-meta">
                  <span>{post.frontmatter.category} </span>
                  <span>{post.frontmatter.date} </span>
                 </h4>
                 <h1 className="post-title">
                  <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
                 </h1>

                 <p className="post-excerpt">
                  {post.excerpt}
                 </p>
               </article>
             );
           })}
    </div>
  );
}

// const Writing = ({ children }) => (
//     <div className="content-wrapper consumer-page">
//       <h1>Notes on the Audio Books &amp; Podcasts I've Listened To</h1>
//       <section className="consumer-container">
//         <h2>2019</h2>
//
//
//       </section>
//     </div>
// )

export const pageQuery = graphql`
query BkmkQuery {
  allMarkdownRemark(
    sort: { order: DESC, fields: [frontmatter___date] },
    filter: {fileAbsolutePath: {regex: "/bkmks/.*\\.md$/"}}
  ) {
    edges {
      node {
        excerpt(pruneLength: 250)
        id
        frontmatter {
          title
          date(formatString: "MMMM Do, YYYY")
          path
          category
        }
      }
    }
  }
}`;
