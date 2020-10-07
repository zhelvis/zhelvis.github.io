/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Fragment } from 'react'
import { DesktopNavigation, MobileNavigation } from './navigation'
import ThemeButton from './themeButton'
import LocalePanel from './localePanel'

const Layout = ({ children, path }) => (
  <Fragment>
    <DesktopNavigation />
    <div
      sx={{
        marginLeft: [0, '18em'],
      }}
    >
      <header
        sx={{
          display: `flex`,
          alignItems: `center`,
          height: '3.5rem',
          position: 'fixed',
          width: ['100%', `calc(100% - 18em)`],
          top: 0,
          px: 3,
          backgroundColor: `background`,
          borderBottom: '1px solid',
          borderColor: 'muted',
          zIndex: 1,
        }}
      >
        <MobileNavigation />
        <div sx={{ mx: 'auto' }} />
        <LocalePanel path={path} />
        <ThemeButton />
      </header>
      <div
        sx={{
          py: '3.5rem',
          px: 3,
        }}
      >
        {children}
      </div>
    </div>
  </Fragment>
)

export default Layout
