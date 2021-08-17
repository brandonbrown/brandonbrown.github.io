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
                        avatar={`avatarsrc`}
                        buttonText={`Hire Me`}
                        buttonTarget={`#`}
                        phoneText={`Text: 1112223333`}
                        phoneTarget={`1112223333`}
                    />
                    <section>
                        <ContentLargeBlock />
                        <ContentLargeBlock />
                        <ContentLargeBlock />
                        <ContentLargeBlock />
                    </section>
                    <section>
                        <TextParagraphBlock 
                            header={`header text`}
                            headerType={`h4`}
                            text={`Main Text`}
                        />
                    </section>
                    <section>
                        <ContentMediumBlock/>
                        <ContentMediumBlock/>
                        <ContentMediumBlock/>
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
