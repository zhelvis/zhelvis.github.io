import React from 'react'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import { LocaleContext } from './localeProvider'
import locales from '../../config/i18n'

export const SEO = ({ description, title }) => {
  const { locale } = React.useContext(LocaleContext)
  const data = locales[locale]

  const { site } = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          siteUrl
        }
      }
    }
  `)

  const pageTitle = title || data.defaultTitle
  const metaDescription = description || data.defaultDescription

  return (
    <Helmet
      htmlAttributes={{
        lang: data.siteLanguage,
      }}
      title={pageTitle}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: pageTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:image`,
          content: `${site.siteMetadata.siteUrl}/link-image.jpg`,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:locale`,
          content: data.ogLanguage,
        },
        {
          name: `yandex-verification`,
          content: `3506a090f8098818`,
        },
      ]}
    />
  )
}
