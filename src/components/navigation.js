/** @jsx jsx */
import { jsx } from 'theme-ui'

import { NavLink } from './navLink'
import { LocaleSwitch } from './localeSwitch'
import { ColorModeSwitch } from './colorModeSwitch'
import useTranslations from './useTranslations'

export const Navigation = () => {
  const { backToHome } = useTranslations()
  return (
    <nav
      sx={{
        display: `flex`,
        justifyContent: `space-between`,
        alignItems: `center`,
      }}
    >
      <NavLink to="/" aria-label={backToHome}>
        <h3>Zhelvis</h3>
      </NavLink>
      <div sx={{ display: `flex`, alignItems: `center` }}>
        <div sx={{ px: 2 }}>
          <LocaleSwitch target="en">EN</LocaleSwitch>
          {` `}/{` `}
          <LocaleSwitch target="ru">RU</LocaleSwitch>
        </div>
        <ColorModeSwitch />
      </div>
    </nav>
  )
}
