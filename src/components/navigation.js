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
        Zhelvis
      </NavLink>
      <div sx={{ display: `flex` }}>
        <LocaleSwitch target="en">EN</LocaleSwitch>
        {` `}/{` `}
        <LocaleSwitch target="ru">RU</LocaleSwitch>
        <ColorModeSwitch />
      </div>
    </nav>
  )
}
