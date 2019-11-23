/** @jsx jsx */
import { useColorMode, jsx } from 'theme-ui'

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

export const ColorModeSwitch = () => {
  const { toggleDarkMode } = useTranslations()
  const [colorMode, setColorMode] = useColorMode()
  const isDark = colorMode === `dark`
  const toggleColorMode = e => {
    setColorMode(isDark ? `light` : `dark`)
  }

  return (
    <Switch
      aria-label={toggleDarkMode}
      aria-checked={isDark}
      checkedIcon={checkedIcon}
      uncheckedIcon={uncheckedIcon}
      checked={isDark}
      onChange={toggleColorMode}
      sx={{
        bg: `black`,
      }}
    />
  )
}
