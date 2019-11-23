/** @jsx jsx */
import { jsx } from 'theme-ui'

import { NavLink } from './navLink'
import { LocaleSwitch } from './localeSwitch'
import { ColorModeSwitch } from './colorModeSwitch'
import { linkDivider, LinkDivider } from './linkDivider'
import useTranslations from './useTranslations'

export const Header = () => {
  const { backToHome } = useTranslations()
  return (
    <header
      className="global-header"
      sx={{
        variant: `header`,
      }}
    >
      <NavLink to="/" aria-label={backToHome}>
        <h2 sx={{ margin: 0 }}>Zhelvis</h2>
      </NavLink>
      <div sx={{ mx: 'auto' }} />
      <div sx={{ display: `flex`, alignItems: `center` }}>
        <div sx={{ px: 4 }}>
          <LocaleSwitch target="en">EN</LocaleSwitch>
          <LinkDivider />
          <LocaleSwitch target="ru">RU</LocaleSwitch>
        </div>
        <ColorModeSwitch />
      </div>
    </header>
  )
}
