const options = {
  headerHeight: `3.5rem`,
  globalPadding: `10vw`,
}

export default {
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
    height: options.headerHeight,
    position: `fixed`,
    px: options.globalPadding,
    backgroundColor: `background`,
    borderBottom: `1px solid`,
    borderColor: `highlight`,
  },
  main: {
    display: `block`,
    pt: options.headerHeight,
    px: options.globalPadding,
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
