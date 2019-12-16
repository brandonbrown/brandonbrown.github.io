import React from 'react'
import Link from 'gatsby-link'
import { Helmet } from "react-helmet"

import { rhythm, scale } from '../utils/typography'

import '../sass/s.scss'

import logo from '../assets/logo.svg'
import square from '../assets/covers/square.jpg'

import Newsletter from '../components/Newsletter'

export default function Bkmks({ data }) {
  const { edges: bkmks } = data.allMarkdownRemark;
  return (
    <div className="content-wrapper creator-page bkmk-list">
    <header>
      <h1>BKMKS</h1>
      <p>My browser's tab bar gets really messy through the work week between research, problem solving, podcast references, reddit links, and good old fashioned procrastination. These are the important bits from each week's explosion of information.</p>
      <Newsletter />
    </header>
    { bkmks.filter(post => post.node.frontmatter.title.length > 0)
           .map(({ node: post }) => {
             return (
                 <article
                  className="blog-post-preview bkmk-item"
                  key={post.id}
                  onClick={
                    () => window.location.pathname =
                    `bkmks/${post.frontmatter.path}`
                  }>
                   <h1 className="post-title">
                    <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
                   </h1>
                   <h4 className="post-meta">
                    <span>For the week of {post.frontmatter.date}</span>
                    <span>Last updated on {post.frontmatter.updated}</span>
                   </h4>
                   <section dangerouslySetInnerHTML={{ __html: post.html }}>

                   </section>

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
        id
        html
        frontmatter {
          title
          date(formatString: "MMMM Do, YYYY")
          path
          category
          updated(formatString: "MMMM Do, YYYY")
        }
      }
    }
  }
}`;
