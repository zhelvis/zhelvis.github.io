/** @jsx jsx */
import { jsx } from 'theme-ui'
import { keyframes } from '@emotion/core'
import { useState, Fragment } from 'react'

import { MenuIcon, CloseIcon } from './icons'
import { IconButton } from './iconButton'
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

const StyledNavLink = ({ ...props }) => (
  <NavLink sx={{ fontWeight: `bold`, mr: 4 }} {...props} />
)

const DesktopNavigation = props => {
  const { backToHome, about, blog } = useTranslations()
  return (
    <nav sx={{ display: [`none`, `block`] }} {...props}>
      <StyledNavLink sx={{ fontSize: `1.2rem` }} to="/" aria-label={backToHome}>
        Zhelvis
      </StyledNavLink>
      <StyledNavLink to="/about">{about}</StyledNavLink>
      <StyledNavLink to="/blog">{blog.title}</StyledNavLink>
    </nav>
  )
}

const MobileNavigation = props => {
  const { backToHome, about, home, blog, toggleMenu } = useTranslations()
  const [isOpen, setOpenBoolean] = useState(false)

  return (
    <div sx={{ display: [`block`, `none`] }}>
      <IconButton aria-label={toggleMenu} onClick={() => setOpenBoolean(true)}>
        <MenuIcon sx={{ fill: `text` }} />
      </IconButton>
      <div
        sx={{
          variant: `navigation.mobile.wrapper`,
          display: isOpen ? `flex` : `none`,
        }}
      >
        <div
          sx={{
            variant: `navigation.mobile.container`,
            animation: `${animation} 0.2s ease-out 0s`,
          }}
        >
          <div sx={{ variant: `navigation.mobile.header` }}>
            <IconButton
              aria-label={toggleMenu}
              onClick={() => setOpenBoolean(false)}
            >
              <CloseIcon sx={{ fill: `text` }} />
            </IconButton>
          </div>
          <nav sx={{ variant: `navigation.mobile.body` }} {...props}>
            <StyledNavLink
              onClick={() => setOpenBoolean(false)}
              to="/"
              aria-label={backToHome}
            >
              {home}
            </StyledNavLink>
            <StyledNavLink onClick={() => setOpenBoolean(false)} to="/about">
              {about}
            </StyledNavLink>
            <StyledNavLink onClick={() => setOpenBoolean(false)} to="/blog">
              {blog.title}
            </StyledNavLink>
          </nav>
        </div>
        <div
          sx={{ height: `inherit`, flexGrow: `1` }}
          onClick={() => setOpenBoolean(false)}
        />
      </div>
    </div>
  )
}

export const Navigation = props => {
  return (
    <Fragment>
      <MobileNavigation {...props} />
      <DesktopNavigation {...props} />
    </Fragment>
  )
}
