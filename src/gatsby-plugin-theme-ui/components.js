/** @jsx jsx */
import { jsx, Themed } from 'theme-ui'
import Prism from '@theme-ui/prism'
import { MdxLink } from 'gatsby-theme-i18n'

const heading = (Tag) => (props) => {
  if (!props.id) return <Tag {...props} />
  return (
    <Tag {...props}>
      <Themed.a sx={{ variant: `heading` }} href={`#${props.id}`}>
        {props.children}
      </Themed.a>
    </Tag>
  )
}

export default {
  pre: ({ children }) => (
    <div sx={{ fontSize: [`0.8em`, `1em`] }}>{children}</div>
  ),
  code: Prism,
  a: MdxLink,
  h1: heading('h1'),
  h2: heading('h2'),
  h3: heading('h3'),
  h4: heading('h4'),
  h5: heading('h5'),
  h6: heading('h6'),
}
