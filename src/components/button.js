/** @jsx jsx */
import { jsx } from 'theme-ui'

export const Button = ({ variant = 'primary', ...props }) => (
  <button
    {...props}
    sx={{
      appearance: 'none',
      display: 'inline-block',
      textAlign: 'center',
      lineHeight: 'inherit',
      textDecoration: 'none',
      fontSize: 'inherit',
      fontWeight: 'bold',
      mr: 1,
      px: 3,
      py: 2,
      border: 0,
      borderRadius: 4,
      // pass variant prop to sx
      variant: `buttons.${variant}`,
    }}
  />
)
