import React from 'react'
// import { Link } from "gatsby"
import Helmet from 'react-helmet'

import FrontBlock from '../components/FrontBlock'
// import { rhythm, scale } from '../utils/typography'
import { graphql } from "gatsby"
import '../sass/s.scss'

import profile from '../assets/indexImages/profile.jpg'
import calendar from '../assets/indexImages/31.svg'
import mmf from '../assets/indexImages/mmf-logo-white-mark.svg'
import bkmks from '../assets/indexImages/bkmks.svg'
import plp from '../assets/indexImages/plp.svg'
import work from '../assets/indexImages/portfolio.svg'


// v2 updates

import Layout from "../components/layout"

const Writing = ({ data, location, children }) => {
  console.log("data: ", data)
  const { edges: writing } = data.allMarkdownRemark;
  // const { location, children } = this.props
    // let header


    // let rootPath = `/`
    // if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
    //   rootPath = __PATH_PREFIX__ + `/`
    // }
    return (
      <Layout>
      <Helmet>
          <meta charSet="utf-8" />
          <title>Home</title>
          <link rel="canonical" href="https://bybrandonbrown.com/home" />
    </Helmet>
      <div className="pageWrapper">
      <section className="featuredContent">
        <FrontBlock
          title="About"
          cornerImage={profile}
          imgWidth={100}
          imgHeight={100}
          imgTop={'1.75rem'}
          imgLeft={'1.75rem'}
          mainContent={"I'm Brandon, a multidisciplinary designer, developer, and educator highly interested in using technology to make the health & fitness industries stronger, more available, and better understood. "}
          category={"About"}
          backgroundColor={'transparent'}
          textColor={'#150d2b'}
          link="/about/"
          linkText="Learn more about me here"
          linkBackground={'#fff'}
        />
        <FrontBlock
          title="Writing"
          cornerImage={calendar}
          imgWidth={50}
          imgHeight={50}
          imgTop={'1.75rem'}
          imgLeft={'1.75rem'}
          category={"Writing"}
          backgroundColor={'#00B9F0'}
          textColor={'#fff'}
          writingContent={writing}
          link="/writing/"
          linkText="See all of my writing here"
          linkBackground={'#198BD8'}
        />
        <FrontBlock
          title="Training"
          cornerImage={mmf}
          imgWidth={50}
          // imgHeight={100}
          imgTop={'1.65rem'}
          imgLeft={'1.65rem'}
          mainContent={"Fitness gives me a strong foundation for every aspect of my life to be better. I help others find the ability to form the same solid ground beneath themselves with a combination of traditional personal training, gaming influences, and my background in human centered design."}
          category={"Personal Training"}
          backgroundColor={'#382154'}
          textColor={'#fff'}
          link="/training/"
          linkText="How can I help you achieve more?"
          linkBackground={'#ED1849'}
        />
        <FrontBlock
          title="BKMKS"
          cornerImage={bkmks}
          imgWidth={60}
          imgHeight={60}
          imgTop={'1.75rem'}
          imgLeft={'1.75rem'}
          mainContent={"My browser's tab bar gets really messy through the work week between research, problem solving, podcast references, reddit links, and good old fashioned procrastination. These are the important bits from each week's explosion of information."}
          category={"BKMKS"}
          backgroundColor={'#DA291C'}
          textColor={'#fff'}
          link="/bkmks/"
          linkText="See all BKMK collections"
          linkTextColor={`#150d2b`}
          linkBackground={`#fff`}
        />
        <FrontBlock
          title="Teaching"
          cornerImage={plp}
          imgWidth={60}
          imgHeight={50}
          imgTop={'1.5rem'}
          imgLeft={'1.75rem'}
          mainContent={"I've been teaching in the university setting for 10 years. With this experience and a keen eye towards the shifting expectations of online education, I'm moving my teaching to new platforms to help more people find the spark for design and use it to better all of our lives."}
          category={"Teaching"}
          backgroundColor={'#011128'}
          textColor={'#fff'}
          link="/teaching/"
          linkText="See what you can learn with me"
          linkTextColor={`#011128`}
          linkBackground={`rgb(241, 229, 106)`}
        />
        <FrontBlock
          title="Creating"
          cornerImage={work}
          imgWidth={60}
          imgHeight={60}
          imgTop={'1.75rem'}
          imgLeft={'1.5rem'}
          mainContent={"My focus at this time is in the area of Mobile User Interface Development utilizing React Native. This type of product development allows me to utilize all of my past experiences as a designer, developer, manager, and content producer. "}
          category={"Creating"}
          backgroundColor={'#292862'}
          textColor={'#fff'}
          link="/creating/"
          linkText="See select work"
          linkBackground={'#42338E'}
        />

      </section>

      </div>
      </Layout>
    )
}

export const pageQuery = graphql`
query IndexWritingQuery {
  allMarkdownRemark(
    sort: { order: DESC, fields: [frontmatter___date] },
    filter: {fileAbsolutePath: {regex: "/writing/.*\\\\.md$/"}},
    limit: 1
  ) {
    edges {
      node {
        id
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

export default Writing
