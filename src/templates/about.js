/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { SEO } from '../components/seo'
import { Header } from '../components/header'

const About = ({ data: { mdx } }) => (
  <React.Fragment>
    <SEO
      title={mdx.frontmatter.title}
      description={mdx.frontmatter.description}
    />
    <Header />
    <div className="about">
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
        description
      }
      body
    }
  }
`
