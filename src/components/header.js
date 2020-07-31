/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'
import { ThemeSwitch } from './themeSwitch'
import { MobileNavigation } from './navigation'

export const Header = () => {
  return (
    <div
      sx={{
        display: `flex`,
        alignItems: `center`,
        height: '3.5em',
        position: 'fixed',
        width: ['100%', `calc(100% - 18em)`],
        top: 0,
        px: 3,
        backgroundColor: `background-alt-1`,
        zIndex: 1,
      }}
    >
      <MobileNavigation />
      <div sx={{ mx: 'auto' }} />
      <div sx={{ display: `flex`, alignItems: `center` }}>
        <nav sx={{ px: 3 }}>
          <Link
            to="/"
            activeClassName="active"
            sx={{ mx: 1, variant: 'navlink' }}
          >
            EN
          </Link>
          <Link
            to="/ru"
            activeClassName="active"
            sx={{ mx: 1, variant: 'navlink' }}
          >
            RU
          </Link>
        </nav>
      </div>
      <ThemeSwitch />
    </div>
  )
}
