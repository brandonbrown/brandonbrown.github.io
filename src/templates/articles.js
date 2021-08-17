import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import {
    ContentPortfolioBlock,
    Hero,
    Layout,
    PostCard,
    Pagination,
    PersonalIntro,
    TextParagraphBlock,
    WorkCTA } from '../components/common'
import { MetaData } from '../components/common/meta'
import HomeIcon from '../images/bbb-home-icon.svg'

const Articles = ({ data, location, pageContext }) => {
    const posts = data.allGhostPost.edges
    const displayPosts = []
    const heroText = `Explorations, Breakdowns, Reviews, and <span>A Correspondence</span> With The Internet`;

    posts.map(({node}) => {
        let bkmkCheck = false;
        bkmkCheck = node.tags.map(tag => {
            if (tag.name.includes('bkmk') || tag.name.includes('portfolio')) {
                return true
            }
        })
        if (bkmkCheck[0] != true){
            return displayPosts.push(node)
        }
    })
    return (
        <>
            <MetaData location={location} />
            <Layout>
                <div className="container">
                    <Hero text={heroText} icon={HomeIcon} />
                    <section className="post-feed">
                        {displayPosts.map((post) => (
                            // The tag below includes the markup for each post - components/common/PostCard.js
                            <PostCard key={post.id} post={post} />
                        ))}
                    </section>
                    <Pagination pageContext={pageContext} />
                </div>
            </Layout>
        </>
    )
}

Articles.propTypes = {
    data: PropTypes.shape({
        allGhostPost: PropTypes.object.isRequired,
    }).isRequired,
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired,
    }).isRequired,
    pageContext: PropTypes.object,
}

export default Articles

// This page query loads all posts sorted descending by published date
// The `limit` and `skip` values are used for pagination
export const pageQuery = graphql`
  query GhostPostQuery($limit: Int!, $skip: Int!) {
    allGhostPost(
        sort: { order: DESC, fields: [published_at] },
        limit: $limit,
        skip: $skip
    ) {
      edges {
        node {
          ...GhostPostFields
        }
      }
    }
  }
`