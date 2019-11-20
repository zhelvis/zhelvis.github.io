import React from 'react'
import { Link } from 'gatsby'
import { LocaleContext } from './localeProvider'
import locales from '../../config/i18n'

// Use the globally available context to choose the right path
export const LocalizedLink = ({ to, ...props }) => {
  const { locale } = React.useContext(LocaleContext)

  const isIndex = to === `/`

  const path = locales[locale].default
    ? isIndex
      ? `/`
      : `${to}/`
    : `/${locales[locale].path}${isIndex ? `/` : `${to}/`}`

  return <Link {...props} to={path} />
}
