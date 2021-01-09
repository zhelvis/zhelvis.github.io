/** @jsx jsx */
import { jsx, Themed, IconButton } from 'theme-ui'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { useTranslation } from 'react-i18next'

import { VKIcon, TelegramIcon, GithubIcon } from './icons'

const Bio = ({ children, ...props }) => {
  const { t } = useTranslation('bio')

  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(relativePath: { eq: "avatar.png" }) {
        childImageSharp {
          fixed(width: 96, height: 96) {
            ...GatsbyImageSharpFixed
          }
        }
      }
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

  const contacts = data.site.siteMetadata.social

  return (
    <div
      {...props}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        p: 3,
      }}
    >
      <Img
        sx={{
          width: 96,
          height: 96,
          borderRadius: `50%`,
          backgroundColor: `muted`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
        fixed={data.avatar.childImageSharp.fixed}
      />
      <Themed.h2 sx={{ my: 2 }}>
        {t(['bio:name', 'Vladimir Zhelvis'])}
      </Themed.h2>
      <span sx={{ mb: 2, fontWeight: 'bold' }}>
        {t(['bio:profession', 'Software engineer'])}
      </span>
      <Themed.a
        sx={{ mb: 2, fontWeight: 'bold' }}
        href={`mailto:${contacts.email}`}
      >
        {contacts.email}
      </Themed.a>
      <div sx={{ mb: 2 }}>
        <IconButton as="a" href={contacts.vk} sx={{ mr: 2 }}>
          <VKIcon sx={{ fill: 'primary' }} />
        </IconButton>
        <IconButton as="a" href={contacts.telegram} sx={{ mr: 2 }}>
          <TelegramIcon sx={{ fill: 'primary' }} />
        </IconButton>
        <IconButton as="a" href={contacts.github} sx={{ mr: 2 }}>
          <GithubIcon sx={{ fill: 'primary' }} />
        </IconButton>
      </div>
    </div>
  )
}

export default Bio
