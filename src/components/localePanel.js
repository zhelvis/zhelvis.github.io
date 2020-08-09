/** @jsx jsx */
import { jsx } from 'theme-ui'
import { LocalizedLink } from 'gatsby-theme-i18n'

const LocalePanel = ({ path }) => {
  return (
    <div sx={{ mx: 2, display: 'flex', alignItems: 'center' }}>
      <LocalizedLink sx={{ variant: 'navlink' }} to={path} language="en">
        EN
      </LocalizedLink>
      <LocalizedLink sx={{ variant: 'navlink' }} to={path} language="ru">
        RU
      </LocalizedLink>
    </div>
  )
}

export default LocalePanel
