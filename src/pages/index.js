/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import React from 'react'
import { graphql } from 'gatsby'
import { AppLink } from '../components/AppLink'
import { SEO } from '../components/seo'
import { LinkDivider } from '../components/linkDivider'
import { T2chIcon } from '../components/icons'
import useTranslations from '../components/useTranslations'

const Index = ({
  data: {
    site: {
      siteMetadata: { author },
    },
  },
}) => {
  const { index, blog, about } = useTranslations()
  return (
    <React.Fragment>
      <SEO />
      <div sx={{ py: 4, fontSize: `1.5rem` }}>
        <Styled.h1>{index.hello}</Styled.h1>
        <p>{index.subline}</p>
        <AppLink sx={{ mr: 2 }} to="/about">
          {about}
        </AppLink>{' '}
        <AppLink to="/blog">{blog.title}</AppLink>
      </div>
      <div sx={{ pb: 4, maxWidth: `container`, fontSize: `1.2rem` }}>
        <Styled.h2>{index.contacts}</Styled.h2>
        <p>
          <AppLink to={`mailto:${author.email}`}>{author.email}</AppLink>
        </p>
        <AppLink to={author.telegram}>Telegram</AppLink>
        <LinkDivider />
        <AppLink to={author.vk}>VK</AppLink>
        <LinkDivider />
        <AppLink to={author.github}>Github</AppLink>
      </div>
      <div sx={{ pb: 6, maxWidth: `container`, fontSize: `1.2em` }}>
        <Styled.h2>{index.projects.title}</Styled.h2>
        <div
          sx={{
            display: `flex`,
            alignItems: `center`,
            flexWrap: `wrap`,
          }}
        >
          <div sx={{ maxWidth: 96 }}>
            <T2chIcon sx={{ width: `100%`, heght: `100%`, fill: `text` }} />
          </div>
          <div sx={{ ml: [0, 3], pt: [3, 0] }}>
            <Styled.h3 sx={{ m: 0 }}>
              <AppLink to="https://t2ch.github.io/">T2CH</AppLink>
            </Styled.h3>
            <p>{index.projects.t2ch.description}</p>
          </div>
        </div>
      </div>
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
        }
      }
    }
  }
`
