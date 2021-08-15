import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import { Layout, PostCard, Pagination } from '../components/common'
import { MetaData } from '../components/common/meta'

/**
* Main index page (home page)
*
* Loads all posts from Ghost and uses pagination to navigate through them.
* The number of posts that should appear per page can be setup
* in /utils/siteConfig.js under `postsPerPage`.
*
*/
const Articles = ({ data, location, pageContext }) => {
    const posts = data.allGhostPost.edges
    console.log({data})
    console.log({posts})
    // const onlyPosts = posts.filter(({node}) => !node.tags.includes('bkmk'));
    const displayPosts = []
    posts.map(({node}) => {
        // console.log("test run: ", node.tags.map(tag => tag.name.includes('bkmk')))
        const bkmkCheck = node.tags.map(tag => {
            if (!tag.name.includes('bkmk' || 'portfolio')) {
                return displayPosts.push(node)
            }
            
        })
        // return bkmkCheck
        // if(!bkmkCheck.includes(true)) return node
        // return bkmkCheck[0] === false ? node : null
        // return node.tags.map(tag => tag.name != 'bkmk') ? node : null 
    })
    return (
        <>
            <MetaData location={location} />
            <Layout>
                <div className="container">
                    <h1>Articles test</h1>
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