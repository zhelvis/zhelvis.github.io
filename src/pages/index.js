/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import { graphql } from 'gatsby'
import { AppLink } from '../components/AppLink'
import { SEO } from '../components/seo'
import { Button } from '../components/button'
import useTranslations from '../components/useTranslations'

const Index = ({ data: { allMdx } }) => {
  const { hello, subline } = useTranslations()

  return (
    <React.Fragment>
      <SEO />
      <div sx={{ py: 3 }}>
        <h1 sx={{ fontSize: `3em` }}>{hello}</h1>
        <p sx={{ fontSize: `1.5em` }}>{subline}</p>
        <Button variant="gray">About</Button>
        <Button variant="gray">Blog</Button>
      </div>
      <hr style={{ margin: `2rem 0` }} />
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
              <AppLink
                to={`/${post.parent.relativeDirectory}`}
                sx={{
                  color: 'inherit',
                  textDecoration: 'none',
                  ':hover,:focus': {
                    color: 'primary',
                    textDecoration: 'underline',
                  },
                }}
              >
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

export default Index

export const query = graphql`
  query Index($locale: String!, $dateFormat: String!) {
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
