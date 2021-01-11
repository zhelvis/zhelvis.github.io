import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

const SEO = ({ description, title, children }) => {
  const { site } = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          siteUrl
        }
      }
    }
  `)

  return (
    <Helmet title={title}>
      <meta name="description" content={description} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
      <meta name="og:type" content="website" />
      <meta
        name="og:image"
        content={`${site.siteMetadata.siteUrl}/link-image.jpg`}
      />
      {children}
    </Helmet>
  )
}

export default SEO
