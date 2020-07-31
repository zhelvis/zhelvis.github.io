/** @jsx jsx */
import { jsx, IconButton, useColorMode } from 'theme-ui'
import useTranslations from './useTranslations'
import { ThemeIcon } from './icons'

export const ThemeSwitch = () => {
  const { toggleDarkMode } = useTranslations()
  const [colorMode, setColorMode] = useColorMode()
  const isDark = colorMode === `dark`
  const toggleColorMode = () => {
    setColorMode(isDark ? `light` : `dark`)
  }
  
  return (
    <IconButton
      aria-label={toggleDarkMode}
      onClick={toggleColorMode}
      sx={{
        outlineStyle: 'none',
        cursor: 'pointer',
      }}
    >
      <ThemeIcon sx={{ fill: 'text'}} />
    </IconButton>
  )
}
