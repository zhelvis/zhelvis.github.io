import React from 'react'

export function wrapRootElement({ element, props }) {
  return <React.StrictMode {...props}>{element}</React.StrictMode>
}
