/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Fragment } from 'react'
import { DesktopNavigation } from './navigation'
import { Header } from './header'

export const Layout = ({ children }) => (
  <Fragment>
    <DesktopNavigation />
    <div
      sx={{
        marginLeft: [0, '18em'],
      }}
    >
      <Header />
      <div sx={{ marginTop: '3rem' }}>{children}</div>
    </div>
  </Fragment>
)
