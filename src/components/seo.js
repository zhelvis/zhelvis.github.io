import React from 'react'
import { Helmet } from 'react-helmet'

const SEO = ({ description, title, children }) => {
  return (
    <Helmet title={title}>
      <meta name="description" content={description} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
      <meta name="og:type" content="website" />
      {children}
    </Helmet>
  )
}

export default SEO
