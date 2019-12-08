/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { SEO } from '../components/seo'

const Post = ({ data: { mdx } }) => (
  <React.Fragment>
    <SEO
      title={mdx.frontmatter.title}
      description={mdx.frontmatter.description}
    />
    <div sx={{ maxWidth: 'container' }} className="blogpost">
      <Styled.h1>{mdx.frontmatter.title}</Styled.h1>
      <MDXRenderer>{mdx.body}</MDXRenderer>
    </div>
  </React.Fragment>
)

export default Post

export const query = graphql`
  query Post($locale: String!, $title: String!) {
    mdx(
      frontmatter: { title: { eq: $title } }
      fields: { locale: { eq: $locale } }
    ) {
      frontmatter {
        title
        description
      }
      body
    }
  }
`
