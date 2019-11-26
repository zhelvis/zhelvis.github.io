/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import { Header } from './header'

export const Layout = ({ children }) => (
  <Styled.root>
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
  </Styled.root>
)
