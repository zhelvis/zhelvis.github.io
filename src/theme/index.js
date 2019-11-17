import colors from './colors'
import styles from './styles'
import prism from './prism'

export default {
  useCustomProperties: false,
  initialColorMode: `light`,
  colors,
  fonts: {
    body: `system-ui, sans-serif`,
    heading: `inherit`,
    monospace: `Consolas, Menlo, Monaco, source-code-pro, Courier New, monospace`,
  },
  sizes: {
    container: 672,
  },
  styles,
  prism,
  // custom props
  navlink: {
    color: 'inherit',
    textDecoration: 'none',
    '&.active': {
      color: 'primary',
    },
  },
}
