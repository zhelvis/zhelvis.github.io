import React from 'react'
import { Layout } from '../components/layout'
import { SEO } from '../components/seo'

const NotFound = () => (
  <Layout>
    <SEO title="404: Not Found" description="this page does not exist" />
    <React.Fragment>Page not found!</React.Fragment>
  </Layout>
)

export default NotFound
