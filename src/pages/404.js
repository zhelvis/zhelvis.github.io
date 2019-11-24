/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import React from 'react'
import { SEO } from '../components/seo'
import useTranslations from '../components/useTranslations'

const NotFound = () => {
  const { notFound } = useTranslations()

  return (
    <React.Fragment>
      <SEO
        title={`404: ${notFound.title}`}
        description={notFound.description}
      />
      <Styled.h1 sx={{ fontSize: `3em` }}>404</Styled.h1>
      <p>{notFound.content}</p>
    </React.Fragment>
  )
}

export default NotFound
