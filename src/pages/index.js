import React from 'react'
import { graphql } from 'gatsby'
import { AppLink } from '../components/AppLink'
import { SEO } from '../components/seo'
import useTranslations from '../components/useTranslations'

const Index = ({ data: { allMdx } }) => {
  const { hello, subline } = useTranslations()

  return (
    <>
      <SEO />
      <h1>{hello}</h1>
      <p>{subline}</p>
      <AppLink to="https://www.example.com">https://www.example.com</AppLink>
      <hr style={{ margin: `2rem 0` }} />
      <ul className="post-list">
        {allMdx.edges.map(({ node: post }) => (
          <li key={`${post.frontmatter.title}-${post.fields.locale}`}>
            <AppLink to={`/${post.parent.relativeDirectory}`}>
              {post.frontmatter.title}
            </AppLink>
            <div>{post.frontmatter.date}</div>
          </li>
        ))}
      </ul>
    </>
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
