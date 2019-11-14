import React from 'react'
import { Link } from 'gatsby'
import { Location } from '@reach/router'
import locales from '../../config/i18n'

const prefixList = Object.keys(locales).filter(el => !locales[el].default)

const LocaleSwitcher = ({ target, ...props }) => {
  // Both functions returns path string w/o first slash
  // the cause of the solution is gatsby Link component issues
  // https://github.com/gatsbyjs/gatsby/issues/11243

  const getDefaultPath = path => {
    let pathArr = path.split('/')
    if (prefixList.includes(pathArr[1])) {
      pathArr.splice(0, 2)
    } else {
      pathArr.splice(0, 1)
    }
    return pathArr.join('/')
  }

  const getTargetPath = path => {
    const to = getDefaultPath(path)
    const isIndex = to === ``
    return locales[target].default ? to : `${target}${isIndex ? `` : `/${to}`}`
  }

  return (
    <Location>
      {({ location }) => (
        <Link {...props} to={`/${getTargetPath(location.pathname)}`} />
      )}
    </Location>
  )
}

export default LocaleSwitcher
