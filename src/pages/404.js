import React from "react"
import { Helmet } from "react-helmet"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <Helmet>
          <meta charSet="utf-8" />
          <title>Page Not Found</title>
          <link rel="canonical" href="https://bybrandonbrown.com/404" />
    </Helmet>
    <div className="content-wrapper" style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <SEO title="404: Not found" />
      <h1 style={{
      textAlign: 'center',
      padding: '5rem'
    }}>There is nothing of importance here. <span style={{
      textAlign: 'center',
      fontSize: '1rem',
      display: 'block'
    }}>Except for you, you are important. ☺️</span></h1>
    </div>
    
  </Layout>
)

export default NotFoundPage
