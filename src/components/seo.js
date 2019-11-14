import React from 'react'
import Helmet from 'react-helmet'

import { LocaleContext } from './layout'
import locales from '../../config/i18n'

const SEO = ({ description, title }) => {
  const { locale } = React.useContext(LocaleContext)
  const data = locales[locale]

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
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:locale`,
          content: data.ogLanguage,
        },
      ]}
    />
  )
}

export default SEO
