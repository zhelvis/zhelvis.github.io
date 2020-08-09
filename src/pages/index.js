/** @jsx jsx */
import { jsx, Button } from 'theme-ui'
import { Fragment } from 'react'
import { LocalizedLink } from 'gatsby-theme-i18n'
import loadable from '@loadable/component'
import { useTranslation } from 'react-i18next'

import SEO from '../components/seo'
import Bio from '../components/bio'
import ThemeButton from '../components/themeButton'
import LocalePanel from '../components/localePanel'

const BackgroundAnimation = loadable(() =>
  import('../components/backgroundAnimation')
)

const Index = () => {
  const { t } = useTranslation(['index', 'navigation'])

  return (
    <Fragment>
      <SEO
        title={t(['index:title', 'Vladimir Zhelvis'])}
        description={t(['index:description', 'My personal website'])}
      />
      <BackgroundAnimation />
      <div
        sx={{
          width: '100vw',
          height: '100vh',
        }}
      >
        <header
          sx={{
            px: 3,
            height: '3.5rem',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row-reverse',
          }}
        >
          <ThemeButton />
          <LocalePanel path="/" />
        </header>
        <main
          sx={{
            mt: [3, 4],
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Bio />
          <div
            sx={{
              mt: 3,
              display: 'grid',
              gap: [3, 2],
              gridTemplateColumns: ['1fr', '1fr 1fr'],
            }}
          >
            <Button variant="primary" as={LocalizedLink} to="/blog/">
              {t(['navigation:blog', 'Blog'])}
            </Button>
            <Button variant="primary" as={LocalizedLink} to="/about/">
              {t(['navigation:about', 'About'])}
            </Button>
          </div>
        </main>
      </div>
    </Fragment>
  )
}

export default Index
