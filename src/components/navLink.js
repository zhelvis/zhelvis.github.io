/** @jsx jsx */
import { jsx } from 'theme-ui'
import { LocalizedLink } from './localizedLink'

export const NavLink = props => (
  <LocalizedLink
    sx={{ variant: 'navlink' }}
    activeClassName="active"
    {...props}
  />
)
