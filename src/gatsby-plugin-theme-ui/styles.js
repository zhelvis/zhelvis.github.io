const heading = {
  fontFamily: `heading`,
  lineHeight: `heading`,
}

export default {
  root: {
    fontFamily: `body`,
    lineHeight: `body`,
  },
  h1: {
    ...heading,
  },
  h2: {
    ...heading,
  },
  h3: {
    ...heading,
  },
  h4: {
    ...heading,
  },
  h5: {
    ...heading,
  },
  h6: {
    ...heading,
  },
  pre: {
    variant: `prism`,
    fontFamily: `monospace`,
    tabSize: 4,
    hyphens: `none`,
    marginBottom: 2,
    color: `text`,
    bg: `muted`,
    overflow: `auto`,
    borderRadius: 3,
    p: 3,
  },
  code: {
    fontFamily: `monospace`,
    fontSize: `inherit`,
  },
  inlineCode: {
    fontFamily: `body`,
    borderRadius: `0.2em`,
    color: `secondary`,
    bg: `muted`,
    paddingY: `0.05em`,
    paddingX: `0.2em`,
  },
  a: {
    color: `primary`,
    textDecoration: `none`,
    ':hover': {
      textDecoration: `underline`,
    },
  },
  hr: {
    borderColor: `muted`,
  },
  p: {
    code: {
      fontSize: `inherit`,
    },
  },
  li: {
    code: {
      fontSize: `inherit`,
    },
  },
  blockquote: {
    borderLeft: `6px solid`,
    borderLeftColor: `primary`,
    borderRadius: 3,
    m: 0,
    px: 3,
    py: 1,
    backgroundColor: `highlight`,
    '&.translation': {
      fontSize: `1em`,
    },
  },
}
