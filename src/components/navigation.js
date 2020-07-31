/** @jsx jsx */
import { jsx, IconButton } from 'theme-ui'
import { keyframes } from '@emotion/core'
import { useState } from 'react'
import { Drawer } from './drawer'

import { MenuIcon, CloseIcon } from './icons'
import { NavLink } from './navLink'
import useTranslations from './useTranslations'

const animation = keyframes`
  from {
    transform: translateX(-100%);
  }

  to {
    transform: none;
  }
`

const Nav = ({ ...props }) => (
  <nav
    sx={{
      p: 3,
      display: `grid`,
      alignItems: 'flex-start',
      fontSize: `1.2rem`,
    }}
    {...props}
  />
)

export const MobileNavigation = ({ children, ...props }) => {
  const { backToHome, about, home, blog, toggleMenu } = useTranslations()
  const [isOpen, setOpenBoolean] = useState(false)

  return (
    <div sx={{ display: [`block`, `none`] }} {...props}>
      <IconButton
        sx={{
          outlineStyle: 'none',
          cursor: 'pointer',
        }}
        aria-label={toggleMenu}
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
            animation: `${animation} 0.2s ease-out 0s`,
          }}
        >
          <Drawer
            sx={{
              backgroundColor: `background`,
            }}
          >
            <Nav>
              <NavLink
                onClick={() => setOpenBoolean(false)}
                to="/"
                aria-label={backToHome}
              >
                {home}
              </NavLink>
              <NavLink onClick={() => setOpenBoolean(false)} to="/about">
                {about}
              </NavLink>
              <NavLink onClick={() => setOpenBoolean(false)} to="/blog">
                {blog.title}
              </NavLink>
            </Nav>
          </Drawer>
          <div
            sx={{
              height: '3.5em',
              display: 'flex',
              alignItems: `center`,
              pl: 1,
            }}
          >
            <IconButton
              aria-label={toggleMenu}
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
        <div
          sx={{ height: `inherit`, flexGrow: `1` }}
          onClick={() => setOpenBoolean(false)}
        />
      </div>
    </div>
  )
}

export const DesktopNavigation = () => {
  const { backToHome, about, home, blog } = useTranslations()

  return (
    <Drawer
      sx={{
        display: ['none', 'block'],
        position: 'fixed',
        top: 0,
        left: 0,
        backgroundColor: `background-alt-2`,
      }}
    >
      <Nav>
        <NavLink to="/" aria-label={backToHome}>
          {home}
        </NavLink>
        <NavLink to="/about">{about}</NavLink>
        <NavLink to="/blog">{blog.title}</NavLink>
      </Nav>
    </Drawer>
  )
}
