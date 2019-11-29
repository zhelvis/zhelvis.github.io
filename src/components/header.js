/** @jsx jsx */
import { jsx } from 'theme-ui'

import { LocaleSwitch } from './localeSwitch'
import { ColorModeSwitch } from './colorModeSwitch'
import { LinkDivider } from './linkDivider'
import { Navigation } from './navigation'

export const Header = () => {
  return (
    <header
      className="global-header"
      sx={{
        variant: `header`,
      }}
    >
      <Navigation />
      <div sx={{ mx: 'auto' }} />
      <div sx={{ display: `flex`, alignItems: `center` }}>
        <div sx={{ px: 4 }}>
          <LocaleSwitch target="en">EN</LocaleSwitch>
          <LinkDivider />
          <LocaleSwitch target="ru">RU</LocaleSwitch>
        </div>
        <ColorModeSwitch />
      </div>
    </header>
  )
}
