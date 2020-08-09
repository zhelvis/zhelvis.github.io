export default {
  navlink: {
    py: 1,
    px: 2,
    color: `inherit`,
    fontWeight: `bold`,
    textDecoration: `none`,
    '&[aria-current="page"]': {
      pointerEvents: `none`,
      color: `primary`,
      backgroundColor: `highlight`,
    },
  },
  buttons: {
    primary: {
      fontWeight: 'bold',
      color: 'background',
      bg: 'primary',
      transition: 'backgroundColor 0.15s',
      '&:hover': {
        bg: 'text',
      },
    },
    icon: {
      outlineStyle: 'none',
      cursor: 'pointer',
    },
  },
}
