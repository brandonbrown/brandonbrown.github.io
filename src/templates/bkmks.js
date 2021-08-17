import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import {
    ContentLargeBlock,
    ContentMediumBlock,
    ContentSmallBlock,
    Hero,
    Layout,
    PostCard,
    Pagination,
    PersonalIntro,
    TextParagraphBlock,
    WorkCTA } from '../components/common'
import { MetaData } from '../components/common/meta'
import HomeIcon from '../images/bbb-home-icon.svg'

const BKMKS = ({ data, location, pageContext }) => {
    const posts = data.allGhostPost.edges
    const displayPosts = []
    const heroText = `The <span>Treasures, Resources, Distractions,</span> And All That Grabs My Attention From Around The Internet`

    posts.map(({node}) => {
        // console.log("test run: ", node.tags.map(tag => tag.name.includes('bkmk')))
        const bkmkCheck = node.tags.map(tag => {
            if (tag.name.includes('bkmk')) {
                return displayPosts.push(node)
            }
            
        })
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

BKMKS.propTypes = {
    data: PropTypes.shape({
        allGhostPost: PropTypes.object.isRequired,
    }).isRequired,
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired,
    }).isRequired,
    pageContext: PropTypes.object,
}

export default BKMKS

// This page query loads all posts sorted descending by published date
// The `limit` and `skip` values are used for pagination
export const pageQuery = graphql`
  query ghostPostQueryAndGhostPostQuery($limit: Int!, $skip: Int!) {
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