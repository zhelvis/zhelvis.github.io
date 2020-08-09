/** @jsx jsx */
import { jsx, IconButton, useColorMode } from 'theme-ui'
import { ThemeIcon } from './icons'
import { useTranslation } from 'react-i18next'

const ThemeButton = () => {
  const [colorMode, setColorMode] = useColorMode()
  const { t } = useTranslation('buttons')
  const isDark = colorMode === `dark`
  const toggleColorMode = () => {
    setColorMode(isDark ? `light` : `dark`)
  }

  return (
    <IconButton
      aria-label={t(['buttons:theme', 'Switch theme'])}
      onClick={toggleColorMode}
    >
      <ThemeIcon sx={{ fill: 'text' }} />
    </IconButton>
  )
}

export default ThemeButton
