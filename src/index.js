import React from 'react'
import { LocaleProvider } from './components/localeProvider'
import { Layout } from './components/layout'

// Pass all props (hence the ...props) to the layout component so it has access to things like pageContext or location
export const wrapPageElement = ({ element, props }) => (
  <LocaleProvider {...props}>
    <Layout>{element}</Layout>
  </LocaleProvider>
)
