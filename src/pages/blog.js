/** @jsx jsx */
import { Styled, jsx } from 'theme-ui'
import { Fragment } from 'react'
import { graphql } from 'gatsby'
import { LocalizedLink } from 'gatsby-theme-i18n'
import { useTranslation } from 'react-i18next'

import Layout from '../components/layout'
import SEO from '../components/seo'

const Blog = ({ data }) => {
  const { t } = useTranslation('blog')

  return (
    <Fragment>
      <SEO
        title={t(['blog:title', 'Blog'])}
        description={t(['blog:description', 'List of blog posts'])}
      />
      <Layout path="/blog/">
        <Styled.h1>{t(['blog:title', 'Blog'])}</Styled.h1>
        <div sx={{ maxWidth: 768 }}>
          <ul
            className="post-list"
            sx={{
              listStyle: 'none',
              m: 0,
              pl: 0,
            }}
          >
            {data.allFile.nodes.map(({ childMdx: post }) => (
              <li
                key={`${post.frontmatter.title}`}
                sx={{
                  mb: 4,
                }}
              >
                <Styled.h2>
                  <Styled.a as={LocalizedLink} to={post.frontmatter.slug}>
                    {post.frontmatter.title}
                  </Styled.a>
                </Styled.h2>
                <small>
                  <span role="img" aria-label="calendar">
                    📅
                  </span>{' '}
                  <b>{post.frontmatter.date}</b>
                </small>
                <br />
                <small>
                  <span role="img" aria-label="time">
                    ⏱
                  </span>{' '}
                  <i>{`${post.timeToRead} ${t(['blog:m', 'min read'])}`}</i>
                </small>
                <p>{post.frontmatter.foreword}</p>
              </li>
            ))}
          </ul>
        </div>
      </Layout>
    </Fragment>
  )
}

export default Blog

export const query = graphql`
  query($locale: String!, $dateFormat: String!) {
    allFile(
      filter: {
        sourceInstanceName: { eq: "blog" }
        childMdx: { fields: { locale: { eq: $locale } } }
      }
    ) {
      nodes {
        childMdx {
          frontmatter {
            slug
            title
            date(formatString: $dateFormat)
            foreword
          }
          timeToRead
        }
      }
    }
  }
`
