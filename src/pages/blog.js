/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import { graphql } from 'gatsby'
import { AppLink } from '../components/AppLink'
import { SEO } from '../components/seo'
// import useTranslations from '../components/useTranslations'

const Blog = ({ data: { allMdx } }) => {
  // const { hello, subline, aboutMe, blog, phone, contacts } = useTranslations()

  return (
    <React.Fragment>
      <SEO />
      <ul
        className="post-list"
        sx={{
          listStyle: 'none',
          m: 0,
          px: 3,
          py: 4,
        }}
      >
        {allMdx.edges.map(({ node: post }) => (
          <li
            key={`${post.frontmatter.title}-${post.fields.locale}`}
            sx={{
              mb: 4,
            }}
          >
            <h2
              sx={{
                m: 0,
              }}
            >
              <AppLink to={`/blog/${post.parent.relativeDirectory}`}>
                {post.frontmatter.title}
              </AppLink>
            </h2>
            <small sx={{ fontWeight: 'bold' }}>{post.frontmatter.date}</small>
          </li>
        ))}
      </ul>
    </React.Fragment>
  )
}

export default Blog

export const query = graphql`
  query Blog($locale: String!, $dateFormat: String!) {
    allMdx(
      filter: { fields: { locale: { eq: $locale } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: $dateFormat)
          }
          fields {
            locale
          }
          parent {
            ... on File {
              relativeDirectory
            }
          }
        }
      }
    }
  }
`
