const heading = {
  fontFamily: 'heading',
  lineHeight: 'heading',
}

export default {
  root: {
    fontFamily: `body`,
    lineHeight: 'body',
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
    color: `white`,
    bg: `prism.background`,
    overflow: `auto`,
    borderRadius: 10,
    p: 3,
  },
  code: {
    fontFamily: `monospace`,
    fontSize: `inherit`,
  },
  inlineCode: {
    borderRadius: `0.3em`,
    color: `secondary`,
    bg: `highlight`,
    paddingTop: `0.15em`,
    paddingBottom: `0.05em`,
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
    color: `inherit`,
    borderLeftColor: `inherit`,
    borderLeft: `2px solid`,
    m: 0,
    pl: 4,
    opacity: 0.8,
    '&.translation': {
      fontSize: `1em`,
    },
  },
}
