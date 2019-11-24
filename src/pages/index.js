/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import React from 'react'
import { graphql } from 'gatsby'
import { AppLink } from '../components/AppLink'
import { SEO } from '../components/seo'
import { LinkDivider } from '../components/linkDivider'
import useTranslations from '../components/useTranslations'

const Index = ({
  data: {
    site: {
      siteMetadata: { author },
    },
  },
}) => {
  const { hello, subline, aboutMe, blog, phone, contacts } = useTranslations()

  return (
    <React.Fragment>
      <SEO />
      <div sx={{ py: 4, fontSize: `1.5rem` }}>
        <Styled.h1>{hello}</Styled.h1>
        <p>{subline}</p>
        <AppLink sx={{ mr: 2 }} to="/about">
          {aboutMe}
        </AppLink>{' '}
        <AppLink to="/blog">{blog}</AppLink>
      </div>
      <div sx={{ pb: 4, fontSize: `1.2rem` }}>
        <Styled.h2>{contacts}</Styled.h2>
        <p>
          Email: <AppLink to={`mailto:${author.email}`}>{author.email}</AppLink>
        </p>
        <p>
          {`${phone}: `}
          <AppLink to={`tel:${author.phone}`}>{author.phone}</AppLink>
        </p>
        <AppLink to={author.telegram}>Telegram</AppLink>
        <LinkDivider />
        <AppLink to={author.vk}>VK</AppLink>
        <LinkDivider />
        <AppLink to={author.github}>Github</AppLink>
      </div>
      {/*
      <div sx={{ fontSize: `1.2em` }}>
        <h2>projects</h2>
      </div>
      */}
    </React.Fragment>
  )
}

export default Index

export const query = graphql`
  query Index {
    site {
      siteMetadata {
        author {
          telegram
          github
          vk
          email
          phone
        }
      }
    }
  }
`
