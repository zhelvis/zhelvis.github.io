import React from 'react'

const LocaleContext = React.createContext()

// Use the built-in Context API to make the "locale" available to every component in the tree
// This e.g. enables the LocalizedLink to function correctly
// As this component wraps every page (due to the wrapPageElement API) we can be sure to have
// the locale available everywhere!
const LocaleProvider = ({ children, pageContext: { locale } }) => (
  <LocaleContext.Provider value={{ locale }}>{children}</LocaleContext.Provider>
)

export { LocaleProvider, LocaleContext }
