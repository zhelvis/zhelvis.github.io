/** @jsx jsx */
import { jsx, Themed } from 'theme-ui'
import { Fragment } from 'react'
import { LocalizedLink } from 'gatsby-theme-i18n'
import { useTranslation } from 'react-i18next'

import SEO from '../components/seo'

const Index = () => {
  const { t } = useTranslation('404')

  return (
    <Fragment>
      <SEO
        title={t(['404:title', 'Not Found'])}
        description={t(['404:description', 'This page does not exist'])}
      />
      <div
        sx={{
          width: '100vw',
          height: '100vh',
          p: 3,
        }}
      >
        <Themed.h1>404</Themed.h1>
        <p>
          {t([
            '404:text',
            'Right now you are on a page that does not exist. Do you exist yourself?',
          ])}
        </p>
        <Themed.a as={LocalizedLink} to="/">
          {t(['404:link', 'Back to home page'])}
        </Themed.a>
      </div>
    </Fragment>
  )
}

export default Index
