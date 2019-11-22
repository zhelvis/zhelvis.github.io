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
  styles,
  prism,
  // custom props
  navlink: {
    color: `inherit`,
    textDecoration: `none`,
    '&.active': {
      display: `inline-block` /* For IE11/ MS Edge bug */,
      pointerEvents: `none`,
      color: `primary`,
    },
  },
  header: {
    display: `flex`,
    alignItems: `center`,
    width: `80vw`,
    height: `3.5em`,
    position: `fixed`,
    px: `10vw`,
    backgroundColor: `background`,
    borderBottom: `1px solid`,
    borderColor: `highlight`,
  },
  buttons: {
    primary: {
      color: 'background',
      bg: 'primary',
    },
    secondary: {
      color: 'background',
      bg: 'secondary',
    },
    gray: {
      color: 'background',
      bg: 'gray',
    },
  },
}
