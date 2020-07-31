import React from 'react'
import { LocaleProvider } from './components/localeProvider'
import { Layout } from './components/layout'

export const wrapPageElement = ({ element, props }) => (
  <LocaleProvider {...props}>
    <Layout>{element}</Layout>
  </LocaleProvider>
)
