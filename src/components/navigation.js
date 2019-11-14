import React from 'react'
import LocalizedLink from './localizedLink'
import LocaleSwitcher from './localeSwitcher'
import useTranslations from './useTranslations'

const Navigation = () => {
  const { backToHome } = useTranslations()

  return (
    <nav>
      <LocalizedLink to="/" aria-label={backToHome}>
        Homepage
      </LocalizedLink>
      <div>
        <LocaleSwitcher target="en">English</LocaleSwitcher>
        {` `}/{` `}
        <LocaleSwitcher target="ru">Русский</LocaleSwitcher>
        {` `}/{` `}
        <LocaleSwitcher target="de">Deutsch</LocaleSwitcher>
      </div>
    </nav>
  )
}

export default Navigation
