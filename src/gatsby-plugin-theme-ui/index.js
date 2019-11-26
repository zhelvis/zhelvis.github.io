import colors from './colors'
import styles from './styles'
import variants from './variants'
import prism from './prism'
import typography from './typography'

export default {
  initialColorMode: 'light',
  useCustomProperties: false,
  colors,
  sizes: {
    container: 768,
  },
  styles,
  prism,
  ...typography,
  ...variants,
}
