/** @jsx jsx */
import { jsx } from 'theme-ui'
import { ThemeProvider, Styled, ColorMode } from 'theme-ui'
import Prism from '@theme-ui/prism'
import theme from './theme/index'
import { LocaleProvider } from './components/localeProvider'
import { MdxLink } from './components/mdxLink'
import { Navigation } from './components/navigation'

const components = {
  pre: ({ children }) => <>{children}</>,
  code: Prism,
  a: MdxLink,
}
export const wrapRootElement = ({ element }) => (
  <ThemeProvider components={components} theme={theme}>
    <ColorMode />
    <Styled.root>{element}</Styled.root>
  </ThemeProvider>
)

// Pass all props (hence the ...props) to the layout component so it has access to things like pageContext or location
export const wrapPageElement = ({ element, props }) => (
  <LocaleProvider {...props}>
    <div className="global-wrapper">
      <header
        sx={
          {
            /* position: `fixed`,*/
          }
        }
        className="global-header"
      >
        <Navigation />
      </header>
      <main>{element}</main>
    </div>
  </LocaleProvider>
)
