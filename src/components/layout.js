/** @jsx jsx */
import { jsx, useThemeUI } from 'theme-ui'
import { Header } from './header'

export const Layout = ({ children }) => {
  const {
    theme: {
      header: { height: headerHeight },
    },
  } = useThemeUI()
  return (
    <div className="global-wrapper">
      <Header />
      <main
        sx={{
          display: `block`,
          pt: headerHeight,
          px: `5vw`,
        }}
      >
        {children}
      </main>
    </div>
  )
}
