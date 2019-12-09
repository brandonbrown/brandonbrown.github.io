import React from 'react'
import Link from 'gatsby-link'
import FrontBlock from '../components/FrontBlock'
import { rhythm, scale } from '../utils/typography'

import '../sass/s.scss'

import hello from '../assets/indexImages/hello.gif'
import profile from '../assets/indexImages/profile.jpg'
import calendar from '../assets/indexImages/31.svg'
import mmf from '../assets/indexImages/mmf-logo-white-mark.svg'
import bkmks from '../assets/indexImages/bkmks.svg'
import plp from '../assets/indexImages/plp.svg'
import work from '../assets/indexImages/portfolio.svg'


export default function Writing({ data }) {
  console.log("data: ", data)
  const { edges: writing } = data.allMarkdownRemark;

    return (
      <div className="pageWrapper">
      <section className="featuredContent">
        <FrontBlock
          title="Introduction"
          cornerImage={profile}
          imgWidth={100}
          imgHeight={100}
          imgTop={'1.75rem'}
          imgLeft={'1.75rem'}
          mainContent={"I'm Brandon, a Design & Web Development Educator highly interested in using technology to make the health & fitness industries stronger through meaningful applications and personalized solutions."}
          category={"Introduction"}
          backgroundColor={'transparent'}
          textColor={'#150d2b'}

        />
        <FrontBlock
          title="Writing"
          cornerImage={calendar}
          imgWidth={50}
          imgHeight={50}
          imgTop={'1.75rem'}
          imgLeft={'1.75rem'}
          category={"Sharing"}
          backgroundColor={'#00B9F0'}
          textColor={'#fff'}
          writingContent={writing}
        />
        <FrontBlock
          title="Training"
          cornerImage={mmf}
          imgWidth={50}
          // imgHeight={100}
          imgTop={'0'}
          imgLeft={'1.65rem'}
          mainContent={"Fitness gave me a strong foundation for every aspect of my life to be better. I help others find the ability to form the same solid ground beneath themselves with a combination of traditional personal training, gaming influences, and my background in human centered design."}
          category={"Training"}
          backgroundColor={'#382154'}
          textColor={'#fff'}
        />
        <FrontBlock
          title="BKMKS"
          cornerImage={bkmks}
          imgWidth={60}
          imgHeight={60}
          imgTop={'1.75rem'}
          imgLeft={'1.75rem'}
          mainContent={"My browser's tab bar gets really messy through the work week between research, problem solving, podcast references, reddit links, and good old fashioned procrastination. These are the important bits from each week's explosion of information."}
          category={"Curating"}
          backgroundColor={'#DA291C'}
          textColor={'#fff'}
        />
        <FrontBlock
          title="Teaching"
          cornerImage={plp}
          imgWidth={60}
          imgHeight={50}
          imgTop={'1.25rem'}
          imgLeft={'1.75rem'}
          mainContent={"I've been teaching in the university setting for 10 years. With this experience and a keen eye towards the shifting expectations of online education, I'm moving my teaching to new platforms to help more people find the spark for design and use it to better all of our lives."}
          category={"Teaching"}
          backgroundColor={'#011128'}
          textColor={'#fff'}
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
        />

      </section>
      <div className="content-wrapper">

        <section className="personal-info">
          <img className="helloImg" src={hello} alt="Hello!" />
          <h1 className="introduction">
            <span>I'm Brandon, a Design &amp; Web Development Educator highly interested in</span>
            <span>using technology to make the health & fitness industries stronger </span>
            <span>through meaningful applications and personalized solutions.</span>
          </h1>
          <h6>You will also find me on these networks:</h6>
          <ul className="sociallinks">
            <li>twitter <span>&mdash;</span> <a href="https://twitter.com/bybrandonbrown" title="Follow Brandon on twitter">@bybrandonbrown</a></li>
            <li>dribbble <span>&mdash;</span> <a href="https://dribbble.com/brandonbrown" title="Follow Brandon on dribbble">@brandonbrown</a></li>
            <li>medium <span>&mdash;</span> <a href="https://medium.com/@bybrandonbrown" title="Folow Brandon on Medium">@bybrandonbrown</a></li>
            <li>github <span>&mdash;</span> <a href="http://github.com/brandonbrown" title="Follow Brandon on GitHub">@brandonbrown</a></li>
            <li>instagram <span>&mdash;</span> <a href="https://instagram.com/heyinstructor" title="Follow Brandon on instagram">@heyinstructor</a></li>
            <li>youtube <span>&mdash;</span> <a href="#">@PointLinePlaneXYZ <span className="comingsoon">Coming Soon</span></a></li>
            <li>email <span>&mdash;</span> <a href="mailto:hey@bybrandonbrown.com">hey@bybrandonbrown.com</a></li>
          </ul>
        </section>
      </div>
      </div>
    )
}

export const pageQuery = graphql`
query IndexWritingQuery {
  allMarkdownRemark(
    sort: { order: DESC, fields: [frontmatter___date] },
    filter: {fileAbsolutePath: {regex: "/writing/.*\\.md$/"}},
    limit: 1
  ) {
    edges {
      node {
        excerpt(pruneLength: 250)
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
