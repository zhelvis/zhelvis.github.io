/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { SEO } from '../components/seo'

const About = ({ data: { mdx } }) => (
  <React.Fragment>
    <SEO title={mdx.frontmatter.title} />
    <div sx={{ maxWidth: 'container' }} className="about">
      <MDXRenderer>{mdx.body}</MDXRenderer>
    </div>
  </React.Fragment>
)

export default About

export const query = graphql`
  query About($locale: String!, $title: String!) {
    mdx(
      frontmatter: { title: { eq: $title } }
      fields: { locale: { eq: $locale } }
    ) {
      frontmatter {
        title
      }
      body
    }
  }
`
