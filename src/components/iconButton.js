/** @jsx jsx */
import { jsx } from 'theme-ui'

export const IconButton = props => (
  <button
    sx={{
      appearance: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 1,
      color: 'inherit',
      bg: 'transparent',
      border: 'none',
      borderRadius: 4,
    }}
    {...props}
  />
)
