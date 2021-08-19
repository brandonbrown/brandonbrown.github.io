import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import {
    ContentPortfolioBlock,
    Hero,
    Layout,
    PostCard,
} from '../components/common'
import { MetaData } from '../components/common/meta'
import HomeIcon from '../images/bbb-home-icon.svg'
import p1 from '../images/placeholders/p1.jpg'
import p2 from '../images/placeholders/p2.jpg'
import p3 from '../images/placeholders/p3.jpg'
import p4 from '../images/placeholders/p4.jpg'

const Work = ({ data, location, pageContext }) => {
    const posts = data.allGhostPost.edges
    const displayPosts = []
    const heroText = `<span>Experienced Designer</span> with expertise throughout the worlds of Startups, Fortune 500, e-commerce, education, entertainment, and development`

    // console.log("work posts: ", posts)
    posts.map(({ node }) => {
        // console.log("test run: ", node.tags.map(tag => tag.name.includes('bkmk')))
        const bkmkCheck = node.tags.map((tag) => {
            if (tag.name.includes(`portfolio`)) {
                return displayPosts.push(node)
            }
        })
    })

    const portfolioImages = [
        {
            id: 0,
            title: `MinMaxFit`,
            intro: <div><p>Vel dolores quibusdam ipsa omnis commodi et odit impedit. Ducimus rem sint rem adipisci eos praesentium. Illo ipsam quisquam assumenda. Qui quis est esse. Nesciunt non est et consequuntur. Ut dolor et voluptatem et labore voluptatem cupiditate.</p><p>Et iste esse rem. Repudiandae quae iure in non autem. Eum est vero quas blanditiis. Sit enim quibusdam enim molestias aut soluta. Et aliquam ipsa cum cupiditate dolore excepturi ex libero.</p></div>,
            link: `./portfolio-piece-test`,
            roles: [`Strategy`,`User Experience`,`Branding`,`Visual Design`],
            coverImage: p1,
            images: [
                {
                    position: 0,
                    url: p2,
                    alt: `Alt Text Of Image`,
                },
                {
                    position: 1,
                    url: p3,
                    alt: `Alt Text Of Image`,
                },
                {
                    position: 2,
                    url: p4,
                    alt: `Alt Text Of Image`,
                },
            ],
        },
        {
            id: 1,
            title: `BoomBox`,
            intro: <div><p>Vel dolores quibusdam ipsa omnis commodi et odit impedit. Ducimus rem sint rem adipisci eos praesentium. Illo ipsam quisquam assumenda. Qui quis est esse. Nesciunt non est et consequuntur. Ut dolor et voluptatem et labore voluptatem cupiditate.</p><p>Et iste esse rem. Repudiandae quae iure in non autem. Eum est vero quas blanditiis. Sit enim quibusdam enim molestias aut soluta. Et aliquam ipsa cum cupiditate dolore excepturi ex libero.</p></div>,
            link: `./portfolio-piece-test`,
            roles: [`Strategy`,`User Experience`,`Branding`,`Visual Design`],
            coverImage: p1,
            images: [
                {
                    position: 0,
                    url: p2,
                    alt: `Alt Text Of Image`,
                },
                {
                    position: 1,
                    url: p3,
                    alt: `Alt Text Of Image`,
                },
                {
                    position: 2,
                    url: p4,
                    alt: `Alt Text Of Image`,
                },
            ],
        },
        {
            id: 2,
            title: `Skeduler`,
            intro: <div><p>Vel dolores quibusdam ipsa omnis commodi et odit impedit. Ducimus rem sint rem adipisci eos praesentium. Illo ipsam quisquam assumenda. Qui quis est esse. Nesciunt non est et consequuntur. Ut dolor et voluptatem et labore voluptatem cupiditate.</p><p>Et iste esse rem. Repudiandae quae iure in non autem. Eum est vero quas blanditiis. Sit enim quibusdam enim molestias aut soluta. Et aliquam ipsa cum cupiditate dolore excepturi ex libero.</p></div>,
            link: `./portfolio-piece-test`,
            roles: [`Strategy`,`User Experience`,`Branding`,`Visual Design`],
            coverImage: `/link/to/coverimage`,
            coverImage: p1,
            images: [
                {
                    position: 0,
                    url: p2,
                    alt: `Alt Text Of Image`,
                },
                {
                    position: 1,
                    url: p3,
                    alt: `Alt Text Of Image`,
                },
                {
                    position: 2,
                    url: p4,
                    alt: `Alt Text Of Image`,
                },
            ],
        },
        {
            id: 3,
            title: `Integrative Peptides`,
            intro: <div><p>Vel dolores quibusdam ipsa omnis commodi et odit impedit. Ducimus rem sint rem adipisci eos praesentium. Illo ipsam quisquam assumenda. Qui quis est esse. Nesciunt non est et consequuntur. Ut dolor et voluptatem et labore voluptatem cupiditate.</p><p>Et iste esse rem. Repudiandae quae iure in non autem. Eum est vero quas blanditiis. Sit enim quibusdam enim molestias aut soluta. Et aliquam ipsa cum cupiditate dolore excepturi ex libero.</p></div>,
            link: `./portfolio-piece-test`,
            roles: [`Strategy`,`User Experience`,`Branding`,`Visual Design`],
            coverImage: `/link/to/coverimage`,
            coverImage: p1,
            images: [
                {
                    position: 0,
                    url: p2,
                    alt: `Alt Text Of Image`,
                },
                {
                    position: 1,
                    url: p3,
                    alt: `Alt Text Of Image`,
                },
                {
                    position: 2,
                    url: p4,
                    alt: `Alt Text Of Image`,
                },
            ],
        },
        {
            id: 4,
            title: `Lake Lorna Doone Park`,
            intro: <div><p>Vel dolores quibusdam ipsa omnis commodi et odit impedit. Ducimus rem sint rem adipisci eos praesentium. Illo ipsam quisquam assumenda. Qui quis est esse. Nesciunt non est et consequuntur. Ut dolor et voluptatem et labore voluptatem cupiditate.</p><p>Et iste esse rem. Repudiandae quae iure in non autem. Eum est vero quas blanditiis. Sit enim quibusdam enim molestias aut soluta. Et aliquam ipsa cum cupiditate dolore excepturi ex libero.</p></div>,
            link: `./portfolio-piece-test`,
            roles: [`Strategy`,`User Experience`,`Branding`,`Visual Design`],
            coverImage: `/link/to/coverimage`,
            coverImage: p1,
            images: [
                {
                    position: 0,
                    url: p2,
                    alt: `Alt Text Of Image`,
                },
                {
                    position: 1,
                    url: p3,
                    alt: `Alt Text Of Image`,
                },
                {
                    position: 2,
                    url: p4,
                    alt: `Alt Text Of Image`,
                },
            ],
        },
        {
            id: 5,
            title: `SideBoosters`,
            intro: <div><p>Vel dolores quibusdam ipsa omnis commodi et odit impedit. Ducimus rem sint rem adipisci eos praesentium. Illo ipsam quisquam assumenda. Qui quis est esse. Nesciunt non est et consequuntur. Ut dolor et voluptatem et labore voluptatem cupiditate.</p><p>Et iste esse rem. Repudiandae quae iure in non autem. Eum est vero quas blanditiis. Sit enim quibusdam enim molestias aut soluta. Et aliquam ipsa cum cupiditate dolore excepturi ex libero.</p></div>,
            link: `./portfolio-piece-test`,
            roles: [`Strategy`,`User Experience`,`Branding`,`Visual Design`],
            coverImage: `/link/to/coverimage`,
            coverImage: p1,
            images: [
                {
                    position: 0,
                    url: p2,
                    alt: `Alt Text Of Image`,
                },
                {
                    position: 1,
                    url: p3,
                    alt: `Alt Text Of Image`,
                },
                {
                    position: 2,
                    url: p4,
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
                    {/* {displayPosts.map(post => (
                        // The tag below includes the markup for each post - components/common/PostCard.js
                        <PostCard key={post.id} post={post} />
                    ))} */}
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