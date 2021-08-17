import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import { Hero, Layout, PostCard, Pagination } from '../components/common'
import { MetaData } from '../components/common/meta'
import HomeIcon from '../images/bbb-home-icon.svg'

/**
* Main index page (home page)
*
* Loads all posts from Ghost and uses pagination to navigate through them.
* The number of posts that should appear per page can be setup
* in /utils/siteConfig.js under `postsPerPage`.
*
*/
const Index = ({ data, location, pageContext }) => {
    // const posts = data.allGhostPost.edges

    const heroText = `I Help You Find Heart-Racing Ideas And Plan, Strategize, Brand, Design, and Build Them <span>Together With You</span>`;

    return (
        <>
            <MetaData location={location} />
            <Layout isHome={true}>
                <div className="container">
                    <Hero text={heroText} icon={HomeIcon} />
                </div>
            </Layout>
        </>
    )
}

Index.propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired,
    }).isRequired,
    pageContext: PropTypes.object,
}

export default Index

// // This page query loads all posts sorted descending by published date
// // The `limit` and `skip` values are used for pagination
// export const pageQuery = graphql`
//   query GhostPostQuery($limit: Int!, $skip: Int!) {
//     allGhostPost(
//         sort: { order: DESC, fields: [published_at] },
//         limit: $limit,
//         skip: $skip
//     ) {
//       edges {
//         node {
//           ...GhostPostFields
//         }
//       }
//     }
//   }
// `
