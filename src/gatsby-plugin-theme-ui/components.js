import React from 'react'
import Prism from '@theme-ui/prism'
import { MdxLink } from '../components/mdxLink'

export default {
  pre: ({ children }) => <>{children}</>,
  code: Prism,
  a: MdxLink,
}
