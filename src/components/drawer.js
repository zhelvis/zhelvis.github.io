/** @jsx jsx */
import { jsx } from 'theme-ui'
import { LocalizedLink } from 'gatsby-theme-i18n'
import { useTranslation } from 'react-i18next'

import Bio from './bio'

const StyledLocalizedLink = ({ ...props }) => {
  return <LocalizedLink sx={{ variant: 'navlink' }} {...props} />
}

const Drawer = ({ children, handleClose = null, ...props }) => {
  const { t } = useTranslation('navigation')

  return (
    <div
      sx={{
        width: ['15em', '18em'],
        height: '100vh',
      }}
      {...props}
    >
      <Bio sx={{ alignItems: 'flex-start' }} />
      <nav
        sx={{
          p: 3,
          display: `grid`,
          alignItems: 'flex-start',
          fontSize: `1.2rem`,
        }}
      >
        <StyledLocalizedLink onClick={handleClose} to="/">
          {t(['navigation:home', 'Home'])}
        </StyledLocalizedLink>
        <StyledLocalizedLink onClick={handleClose} to="/blog/">
          {t(['navigation:blog', 'Blog'])}
        </StyledLocalizedLink>
        <StyledLocalizedLink onClick={handleClose} to="/about/">
          {t(['navigation:about', 'About'])}
        </StyledLocalizedLink>
      </nav>
    </div>
  )
}

export default Drawer
