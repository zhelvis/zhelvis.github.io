import colors from './colors'
import styles from './styles'
import components from './components'
import prism from './prism'
import typography from './typography'

export default {
  useCustomProperties: false,
  initialColorMode: `light`,
  colors,
  fonts: {
    body: `system-ui, sans-serif`,
    heading: `inherit`,
    monospace: `Consolas, Menlo, Monaco, source-code-pro, Courier New, monospace`,
  },
  lineHeights: {
    body: 1.625,
    heading: 1.25,
  },
  sizes: {
    container: 768,
  },
  styles,
  prism,
  ...typography,
  ...components,
}
