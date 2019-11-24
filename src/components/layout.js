/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Header } from './header'

export const Layout = ({ children }) => (
  <div className="global-wrapper">
    <Header />
    <main
      className="global-content"
      sx={{
        variant: `main`,
      }}
    >
      {children}
    </main>
  </div>
)
