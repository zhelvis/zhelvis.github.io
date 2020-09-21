export default {
  navlink: {
    py: 1,
    px: 2,
    borderRadius: 3,
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
