/** @jsx jsx */
import { jsx } from 'theme-ui'
import Prism from '@theme-ui/prism'
import { MdxLink } from '../components/mdxLink'

export default {
  pre: ({ children }) => (
    <div sx={{ fontSize: [`0.8em`, `1em`] }}>{children}</div>
  ),
  code: Prism,
  a: MdxLink,
}
