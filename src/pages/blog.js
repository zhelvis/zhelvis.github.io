/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import React from 'react'
import { graphql } from 'gatsby'
import { AppLink } from '../components/AppLink'
import { SEO } from '../components/seo'
import useTranslations from '../components/useTranslations'

const Blog = ({ data: { allMdx } }) => {
  const { blog, m } = useTranslations()

  return (
    <React.Fragment>
      <SEO title={blog.title} description={blog.description} />
      <div sx={{ maxWidth: 'container' }}>
        <ul
          className="post-list"
          sx={{
            listStyle: 'none',
            m: 0,
            py: 4,
            pl: 0,
          }}
        >
          {allMdx.edges.map(({ node: post }) => (
            <li
              key={`${post.frontmatter.title}-${post.fields.locale}`}
              sx={{
                mb: 4,
              }}
            >
              <Styled.h2
                sx={{
                  m: 0,
                }}
              >
                <AppLink to={`/blog/${post.parent.relativeDirectory}`}>
                  {post.frontmatter.title}
                </AppLink>
              </Styled.h2>
              <small sx={{ fontWeight: `bold` }}>{post.frontmatter.date}</small>
              <br />
              <small
                sx={{ fontStyle: `italic` }}
              >{`${post.timeToRead} ${m}`}</small>
              <p>{post.frontmatter.foreword}</p>
            </li>
          ))}
        </ul>
      </div>
    </React.Fragment>
  )
}

export default Blog

export const query = graphql`
  query Blog($locale: String!, $dateFormat: String!) {
    allMdx(
      filter: {
        fileAbsolutePath: { glob: "**/content/blog/**" }
        fields: { locale: { eq: $locale } }
      }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: $dateFormat)
            foreword
          }
          timeToRead
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
