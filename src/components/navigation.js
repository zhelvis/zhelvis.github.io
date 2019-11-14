import React from 'react'
import { useColorMode } from 'theme-ui'

import LocalizedLink from './localizedLink'
import LocaleSwitcher from './localeSwitcher'
import useTranslations from './useTranslations'

const Navigation = () => {
  const { backToHome } = useTranslations()
  const [colorMode, setColorMode] = useColorMode()

  return (
    <nav>
      <LocalizedLink to="/" aria-label={backToHome}>
        Zhelvis
      </LocalizedLink>
      <div>
        <LocaleSwitcher target="en">English</LocaleSwitcher>
        {` `}/{` `}
        <LocaleSwitcher target="ru">Русский</LocaleSwitcher>
      </div>
      <button
        onClick={e => {
          setColorMode(colorMode === 'default' ? 'dark' : 'default')
        }}
      >
        Toggle {colorMode === 'default' ? 'Dark' : 'Light'}
      </button>
    </nav>
  )
}

export default Navigation
