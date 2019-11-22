import React from 'react'

import Layout from '../components/layout'
import Container from 'react-bootstrap/Container'
import SEO from '../components/Seo'

export default () => (
  <Layout>
    <Container>
      <SEO title="404: Not found" />
      <p>It looks like this page doesn't exist.</p>
      <p>
        Click <a href="/">here</a> to go back
      </p>
    </Container>
  </Layout>
)
