/** @jsx jsx */
import { jsx, IconButton } from 'theme-ui'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import { MenuIcon, CloseIcon } from './icons'
import Drawer from './drawer'

export const MobileNavigation = ({ children, ...props }) => {
  const { t } = useTranslation('buttons')
  const [isOpen, setOpenBoolean] = useState(false)

  return (
    <div sx={{ display: [`block`, `none`] }} {...props}>
      <IconButton
        sx={{
          outlineStyle: 'none',
          cursor: 'pointer',
        }}
        aria-label={t(['buttons:nav.open', 'Open navigation'])}
        onClick={() => setOpenBoolean(true)}
      >
        <MenuIcon sx={{ fill: `text` }} />
      </IconButton>
      <div
        sx={{
          display: isOpen ? `flex` : `none`,
          alignItems: `flex-start`,
          height: `100vh`,
          width: `100vw`,
          position: `fixed`,
          top: 0,
          left: 0,
          zIndex: 2,
          backgroundColor: `rgba(0, 0, 0, 0.7)`,
        }}
      >
        <div
          sx={{
            display: `flex`,
            height: `inherit`,
            animation: 'drawer 0.2s ease-out 0s',
          }}
        >
          <Drawer
            sx={{
              backgroundColor: `background`,
            }}
            handleClose={() => setOpenBoolean(false)}
          />
          <div
            sx={{
              height: '3.5em',
              display: 'flex',
              alignItems: `center`,
              pl: 1,
            }}
          >
            <IconButton
              aria-label={t(['buttons:nav.close', 'Close navigation'])}
              onClick={() => setOpenBoolean(false)}
              sx={{
                color: 'hsl(210, 50%, 96%)',
                outlineStyle: 'none',
                cursor: 'pointer',
              }}
            >
              <CloseIcon sx={{ fill: 'currentColor' }} />
            </IconButton>
          </div>
        </div>
        {/* eslint-disable */}
        <div
          aria-label={t(['buttons:nav.close', 'Close navigation'])}
          sx={{ height: `inherit`, flexGrow: `1` }}
          onClick={() => setOpenBoolean(false)}
        />
        {/* eslint-enable */}
      </div>
    </div>
  )
}

export const DesktopNavigation = () => {
  return (
    <Drawer
      sx={{
        display: ['none', 'block'],
        position: 'fixed',
        top: 0,
        left: 0,
        backgroundColor: `muted`,
      }}
    />
  )
}
