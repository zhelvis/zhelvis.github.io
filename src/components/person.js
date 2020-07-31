/** @jsx jsx */
import { jsx, Avatar, IconButton, Styled } from 'theme-ui'
import { useStaticQuery, graphql } from 'gatsby'
import useTranslations from './useTranslations'

import { AppLink } from './AppLink'
import { VKIcon, TelegramIcon, GithubIcon } from './icons'

export const Person = (props) => {
  const { person } = useTranslations()

  const { site } = useStaticQuery(graphql`
    query Index {
      site {
        siteMetadata {
          social {
            telegram
            github
            vk
            email
          }
        }
      }
    }
  `)

  const social = site.siteMetadata.social

  return (
    <div
      sx={{
        p: 3,
        display: 'grid',
        gap: 3
      }}
      {...props}
    >
      <div>
        <Avatar sx={{ width: 96, height: 96 }} src="/link-image.jpg" />
      </div>
      <Styled.h2 sx={{ m: 0 }}>{person.name}</Styled.h2>
      <AppLink sx={{fontWeight: 'bold' }} to={`mailto:${social.email}`}>{social.email}</AppLink>
      <div>
        <IconButton as="a" href={social.vk} sx={{ mr: 2 }}>
          <VKIcon sx={{ fill: `primary` }} />
        </IconButton>
        <IconButton as="a" href={social.telegram} sx={{ mr: 2 }}>
          <TelegramIcon sx={{ fill: `primary` }} />
        </IconButton>
        <IconButton as="a" href={social.github} sx={{ mr: 2 }}>
          <GithubIcon sx={{ fill: `primary` }} />
        </IconButton>
      </div>
    </div>
  )
}
