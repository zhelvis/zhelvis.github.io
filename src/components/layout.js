import React from 'react'
import Navigation from './navigation'

export const Layout = ({ children }) => (
  <div className="global-wrapper">
    <header className="global-header">
      <Navigation />
    </header>
    <main>{children}</main>
  </div>
)
