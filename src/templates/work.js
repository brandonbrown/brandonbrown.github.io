import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import {
    ContentPortfolioBlock,
    Hero,
    Layout,
    PostCard
} from '../components/common'
import { MetaData } from '../components/common/meta'
import HomeIcon from '../images/bbb-home-icon.svg'

const Work = ({ data, location, pageContext }) => {
    const posts = data.allGhostPost.edges
    const displayPosts = []
    const heroText = `<span>Experienced Designer</span> with expertise throughout the worlds of Startups, Fortune 500, e-commerce, education, entertainment, and development`;

    // console.log("work posts: ", posts)
    posts.map(({node}) => {
        // console.log("test run: ", node.tags.map(tag => tag.name.includes('bkmk')))
        const bkmkCheck = node.tags.map(tag => {
            if (tag.name.includes(`portfolio`)) {
                return displayPosts.push(node)
            }
            
        })
    })

    const portfolioImages = [
        {
            id: 0,
            title: `Title of 0`,
            intro: <div><p>Breakdown Intro and Excerpt</p></div>,
            link: `./portfolio-piece-test`,
            roles: [`Strategy`,`User Experience`,`Branding`,`Visual Design`],
            coverImage: `/link/to/coverimage`,
            images: [
                {
                    position: 0,
                    url: `/link/to/image`,
                    alt: `Alt Text Of Image`
                },
                {
                    position: 1,
                    url: `/link/to/image`,
                    alt: `Alt Text Of Image`
                },
                {
                    position: 2,
                    url: `/link/to/image`,
                    alt: `Alt Text Of Image`
                },
            ],
        },
        {
            id: 1,
            title: `Title of 1`,
            intro: <div><p>Breakdown Intro and Excerpt</p></div>,
            link: `./portfolio-piece-test`,
            roles: [`Strategy`,`User Experience`,`Branding`,`Visual Design`],
            coverImage: `/link/to/coverimage`,
            images: [
                {
                    position: 0,
                    url: `/link/to/image`,
                    alt: `Alt Text Of Image`
                },
                {
                    position: 1,
                    url: `/link/to/image`,
                    alt: `Alt Text Of Image`
                },
                {
                    position: 2,
                    url: `/link/to/image`,
                    alt: `Alt Text Of Image`
                },
            ],
        },
        {
            id: 2,
            title: `Title of 2`,
            intro: <div><p>Breakdown Intro and Excerpt</p></div>,
            link: `./portfolio-piece-test`,
            roles: [`Strategy`,`User Experience`,`Branding`,`Visual Design`],
            coverImage: `/link/to/coverimage`,
            images: [
                {
                    position: 0,
                    url: `/link/to/image`,
                    alt: `Alt Text Of Image`,
                },
                {
                    position: 1,
                    url: `/link/to/image`,
                    alt: `Alt Text Of Image`,
                },
                {
                    position: 2,
                    url: `/link/to/image`,
                    alt: `Alt Text Of Image`,
                },
            ],
        },
    ]
    return (
        <>
            <MetaData location={location} />
            <Layout>
                <div className="container">
                    <Hero text={heroText} icon={HomeIcon} />
                </div>
                <section className="portfolio-feed">
                    {
                        portfolioImages.map(portfolio => <ContentPortfolioBlock key={portfolio.id} portfolio={portfolio} />)
                    }
                    {displayPosts.map(post => (
                        // The tag below includes the markup for each post - components/common/PostCard.js
                        <PostCard key={post.id} post={post} />
                    ))}
                </section>
            </Layout>
        </>
    )
}

Work.propTypes = {
    data: PropTypes.shape({
        allGhostPost: PropTypes.object.isRequired,
    }).isRequired,
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired,
    }).isRequired,
    pageContext: PropTypes.object,
}

export default Work

// This page query loads all posts sorted descending by published date
// The `limit` and `skip` values are used for pagination
export const pageQuery = graphql`
  query GhostWorkQuery($limit: Int!, $skip: Int!) {
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