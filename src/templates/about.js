import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import {
    Hero,
    Layout,
    WorkCTA } from '../components/common'
import { MetaData } from '../components/common/meta'
import HomeIcon from '../images/bbb-home-icon.svg'

const About = ({ data, location, pageContext }) => {
    // const posts = data.allGhostPost.edges
    // const displayPosts = []
    const heroText = `I <span>Live To Inspire,</span> Create, Dream, Ponder, Explore, Learn, Play, Love, and To Empower Others On Their Journey`

    // posts.map(({node}) => {
    //     // console.log("test run: ", node.tags.map(tag => tag.name.includes('bkmk')))
    //     const bkmkCheck = node.tags.map(tag => {
    //         if (tag.name.includes('bkmk')) {
    //             return displayPosts.push(node)
    //         }
            
    //     })
    // })
    return (
        <>
            <MetaData location={location} />
            <Layout>
                <div className="container">
                    <Hero text={heroText} icon={HomeIcon} />
                </div>
                <div>
                    <h5>full screen</h5>
                </div>
                <div className="container">
                    <div>
                        <p>main content</p>
                    </div>
                    <aside>
                        sidebar
                    </aside>
                </div>
            </Layout>
        </>
    )
}

About.propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired,
    }).isRequired,
    pageContext: PropTypes.object,
}

export default About