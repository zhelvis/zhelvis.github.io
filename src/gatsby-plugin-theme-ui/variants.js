const options = {
  headerHeight: `3.5rem`,
  globalPadding: `10vw`,
}

export default {
  navlink: {
    display: `inline-block` /* For IE11/ MS Edge bug */,
    color: `inherit`,
    textDecoration: `none`,
    '&.active': {
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
    borderColor: `muted`,
    zIndex: 1,
  },
  main: {
    display: `block`,
    pt: options.headerHeight,
    pb: 6,
    px: options.globalPadding,
  },
  navigation: {
    mobile: {
      wrapper: {
        display: `flex`,
        height: `100vh`,
        width: `100vw`,
        position: `fixed`,
        top: 0,
        left: 0,
        zIndex: 2,
        backgroundColor: `rgba(0, 0, 0, 0.5)`,
      },
      container: {
        display: `flex`,
        flexDirection: `column`,
        height: `inherit`,
        px: 3,
        width: 150,
        backgroundColor: `background`,
      },
      header: {
        display: `flex`,
        justifyContent: `flex-end`,
        alignItems: `center`,
        height: options.headerHeight,
      },
      body: {
        display: `flex`,
        flexDirection: 'column',
        fontSize: '1.5rem',
      },
    },
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
