/* eslint-disable max-lines */
import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import {
    ContentLargeBlock,
    ContentMediumBlock,
    ContentSmallBlock,
    Hero,
    Layout,
    PersonalIntro,
    TextParagraphBlock,
    WorkCTA } from '../components/common'
import { MetaData } from '../components/common/meta'
import HomeIcon from '../images/bbb-home-icon.svg'
import Avatar from '../images/bbb-avatar-bg-m21.png'
import ph1 from '../images/placeholders/1.jpg'
import ph2 from '../images/placeholders/2.jpg'
import ph3 from '../images/placeholders/3.jpg'
import ph4 from '../images/placeholders/4.jpg'
import ph5 from '../images/placeholders/5.jpg'
import ph6 from '../images/placeholders/6.jpg'
import ph7 from '../images/placeholders/7.jpg'
import ph8 from '../images/placeholders/8.jpg'

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

    // const workCTAContent = <section><p>This</p><p>That</p></section>

    return (
        <>
            <MetaData location={location} />
            <Layout isHome={true}>
                <div className="container">
                    <Hero text={heroText} icon={HomeIcon} />
                    {/* text, header, icon, avatar, buttonText, buttonTarget, phoneText, phoneTarget */}
                    <PersonalIntro
                        text={`A seasoned designer with expertise in creating user interfaces and experiences with background in traditional media, branding, business strategy, and providing professional education.
`}
                        header={`👋 Hi, I’m Brandon!`}
                        avatar={Avatar}
                        buttonText={`Hire Me`}
                        buttonTarget={`#`}
                        phoneText={`Text: (111) 222-3333`}
                        phoneTarget={`1112223333`}
                    />
                    <section className="flex flex-row flex-wrap justify-center">
                        <ContentLargeBlock mainImage={ph1} altText="Alt Text" header="UI/UX Designer & Developer" text="Est est numquam deleniti quae quas odit explicabo. Explicabo dolorem quis assumenda sed aliquid." />
                        <ContentLargeBlock mainImage={ph2} altText="Alt Text" header="Remote Design Thinking Facilitator" text="Est est numquam deleniti quae quas odit explicabo. Explicabo dolorem quis assumenda sed aliquid." />
                        <ContentLargeBlock mainImage={ph3} altText="Alt Text" header="Instructor at Full Sail University" text="Est est numquam deleniti quae quas odit explicabo. Explicabo dolorem quis assumenda sed aliquid." />
                        <ContentLargeBlock mainImage={ph4} altText="Alt Text" header="Online Educator" text="Est est numquam deleniti quae quas odit explicabo. Explicabo dolorem quis assumenda sed aliquid." />
                    </section>
                    <section className="baseContent">
                        <TextParagraphBlock 
                            header={`Featured Work`}
                            headerType={`h2`}
                            text={`Est est numquam deleniti quae quas odit explicabo. Explicabo dolorem quis assumenda sed aliquid dolores et. Aperiam architecto ea. Quia aut dignissimos similique alias quos.`}
                        />
                        <div className="flex flex-row justify-between">
                            <ContentMediumBlock text="text" mainImage={ph6} />
                            <ContentMediumBlock text="text" mainImage={ph7} />
                            <ContentMediumBlock text="text" mainImage={ph8} />
                        </div>
                    </section>
                    <WorkCTA />
                    <section className="largeText">
                        <p>Eligendi a dolor illo qui. Illo debitis et. Aut labore beatae doloremque ut. Perspiciatis eveniet fugiat dolor sint iure nam minus labore ea.</p>
                        <p>Dolor dicta velit ea neque occaecati. Pariatur iste amet est debitis ut enim iste nostrum. Doloribus dolores nisi quibusdam quidem aspernatur eos ut repudiandae eius. Autem vitae et. Magnam vero numquam doloribus enim.</p>
                    </section>
                    <section>
                        <TextParagraphBlock 
                            header={`Also Working On`}
                            headerType={`h3`}
                            text={null}
                            linkTarget={`/thislink`}
                        />
                        <ContentSmallBlock />
                        <ContentSmallBlock />
                        <ContentSmallBlock />
                    </section>
                    <section>
                        <TextParagraphBlock 
                            header={`Product Studies And Breakdowns`}
                            headerType={`h3`}
                            text={null}
                            linkTarget={`/thislink`}
                        />
                        <ContentSmallBlock hideImage />
                        <ContentSmallBlock hideImage />
                        <ContentSmallBlock hideImage />
                    </section>
                    <section>
                        <TextParagraphBlock 
                            header={`Other Articles From The Blog`}
                            headerType={`h3`}
                            text={`Est est numquam deleniti quae quas odit explicabo. Explicabo dolorem quis assumenda sed aliquid dolores et. Aperiam architecto ea. Quia aut dignissimos similique alias quos.`}
                            linkTarget={`/thislink`}
                        />
                        <ContentMediumBlock />
                        <ContentMediumBlock />
                        <ContentMediumBlock />
                    </section>
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
