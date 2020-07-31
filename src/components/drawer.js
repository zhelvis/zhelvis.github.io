/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Person } from './person'

export const Drawer = ({ children, ...props }) => {
  return (
    <div
      sx={{
        width: ['15em','18em'],
        height: '100vh',
      }}
      {...props}
    >
      <Person />
      {children}
    </div>
  )
}
