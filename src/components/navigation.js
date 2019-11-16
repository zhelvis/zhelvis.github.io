/** @jsx jsx */
import { useColorMode, jsx } from 'theme-ui'

import { LocalizedLink } from './localizedLink'
import { LocaleSwitch } from './localeSwitch'
import { Switch } from './switch'
import useTranslations from './useTranslations'
import sun from '../../assets/sun.png'
import moon from '../../assets/moon.png'

const checkedIcon = (
  <img
    alt="moon indicating dark mode"
    src={moon}
    width="16"
    height="16"
    role="presentation"
    sx={{
      pointerEvents: `none`,
      margin: `4px`,
    }}
  />
)

const uncheckedIcon = (
  <img
    alt="sun indicating light mode"
    src={sun}
    width="16"
    height="16"
    role="presentation"
    sx={{
      pointerEvents: `none`,
      margin: `4px`,
    }}
  />
)

const Navigation = () => {
  const { backToHome } = useTranslations()
  const [colorMode, setColorMode] = useColorMode()
  const isDark = colorMode === `dark`
  const toggleColorMode = e => {
    setColorMode(isDark ? `light` : `dark`)
  }

  return (
    <nav
      sx={{
        display: `flex`,
        justifyContent: `space-between`,
        alignItems: `center`,
      }}
    >
      <LocalizedLink to="/" aria-label={backToHome}>
        Zhelvis
      </LocalizedLink>
      <div sx={{ display: `flex` }}>
        <LocaleSwitch target="en">EN</LocaleSwitch>
        {` `}/{` `}
        <LocaleSwitch target="ru">RU</LocaleSwitch>
        <Switch
          aria-label="Toggle dark mode"
          checkedIcon={checkedIcon}
          uncheckedIcon={uncheckedIcon}
          checked={isDark}
          onChange={toggleColorMode}
          sx={{
            bg: `black`,
          }}
        />
      </div>
    </nav>
  )
}

export default Navigation
