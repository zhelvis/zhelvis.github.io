import React from 'react'
import { Styled } from 'theme-ui'
import { LocalizedLink } from './localizedLink'

const isHash = str => /^#/.test(str)
const isInternal = to => /^\/(?!\/)/.test(to)

export const AppLink = ({ to, ...props }) =>
  isHash(to) || !isInternal(to) ? (
    <Styled.a {...props} href={to} />
  ) : (
    <Styled.a as={LocalizedLink} to={to} {...props} />
  )
