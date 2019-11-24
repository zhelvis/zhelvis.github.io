/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { SEO } from '../components/seo'
import useTranslations from '../components/useTranslations'

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "me.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 640, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Img
      sx={{ zIndex: -1 }}
      fluid={data.placeholderImage.childImageSharp.fluid}
      alt="my foto"
    />
  )
}

const About = () => {
  const { about } = useTranslations()

  return (
    <React.Fragment>
      <SEO title={about.title} description={about.description} />
      <Styled.h1>{about.title}</Styled.h1>
      <div sx={{ maxWidth: 640 }}>
        <Image />
      </div>
      <div sx={{ maxWidth: 'container' }}>
        <p>{about.content}</p>
      </div>
    </React.Fragment>
  )
}

export default About
