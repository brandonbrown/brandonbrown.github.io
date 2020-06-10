import React from 'react'
// import Link from 'gatsby-link'
import { graphql, Link } from "gatsby"
// import { rhythm, scale } from '../utils/typography'

import '../sass/s.scss'

// import logo from '../assets/logo.svg'
// import square from '../assets/covers/square.jpg'
import Layout from "../components/layout"

export default function Writing({ data }) {
  console.log("data: ", data)
  const { edges: writing } = data.allMarkdownRemark;
  return (
    <Layout>
    <div className="content-wrapper creator-page">
    { writing.filter(post => post.node.frontmatter.title.length > 0)
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
    </Layout>
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
query WritingQuery {
  allMarkdownRemark(
    sort: { order: DESC, fields: [frontmatter___date] },
    filter: {fileAbsolutePath: {regex: "/writing/.*\\\\.md$/"}}
  ) {
    edges {
      node {
        id
        excerpt
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
