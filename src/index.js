import React from 'react'
import { ThemeProvider, Styled, ColorMode } from 'theme-ui'
import Prism from '@theme-ui/prism'
import theme from './theme/index'
import { LocaleProvider } from './components/localeProvider'
import { MdxLink } from './components/mdxLink'

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
  <LocaleProvider {...props}>{element}</LocaleProvider>
)
