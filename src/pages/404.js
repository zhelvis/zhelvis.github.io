import React from 'react'
import { SEO } from '../components/seo'
import useTranslations from '../components/useTranslations'

const NotFound = () => {
  const { notFound } = useTranslations()

  return (
    <>
      <SEO
        title={`404: ${notFound.title}`}
        description={notFound.description}
      />
      <p>{notFound.content}</p>
    </>
  )
}

export default NotFound
