import colors from './colors'
import styles from './styles'
import variants from './variants'
import prism from './prism'
import typography from './typography'

export default {
  useColorSchemeMediaQuery: true,
  colors,
  styles,
  prism,
  ...typography,
  ...variants,
}
