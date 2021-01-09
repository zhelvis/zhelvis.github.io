/** @jsx jsx */
import { jsx, Themed } from 'theme-ui'
import { Fragment } from 'react'
import { useTranslation } from 'react-i18next'

import SEO from '../components/seo'
import Layout from '../components/layout'
import {
  RudnIcon,
  T2chIcon,
  DasIcon,
  VistaIcon,
  TextIcon,
} from '../components/icons'

const List = ({ children }) => (
  <ul
    sx={{
      listStyle: 'none',
      m: 0,
      //my: 3,
      pl: 0,
    }}
  >
    {children}
  </ul>
)

const ListItem = ({ children, icon: Icon, title: Title }) => (
  <li>
    <div
      sx={{
        display: 'flex',
        flexDirection: ['column', 'row'],
        variant: 'paper',
        mb: 3,
      }}
    >
      {Icon && (
        <div
          sx={{
            display: 'flex',
            alignItems: ['center', 'flex-start'],
            justifyContent: 'center',
            width: 100,
            height: 100,
            mr: [0, 3],
            mb: [3, 0],
          }}
        >
          <Icon />
        </div>
      )}
      <div>
        {Title && <Title />}
        {children}
      </div>
    </div>
  </li>
)

const EducationItem = ({
  icon,
  title,
  department,
  specialization,
  degree,
  years,
}) => (
  <ListItem icon={icon} title={title}>
    <p sx={{ mt: 3, mb: 0 }}>
      <b>{specialization}</b>
      <br />
      {department}
      <br />
      {degree}
      <br />
      <i>{years}</i>
      <br />
    </p>
  </ListItem>
)

const CompanyItem = ({ icon, title, activity, position, years }) => (
  <ListItem icon={icon} title={title}>
    <p sx={{ mt: 3, mb: 0 }}>
      <b>{position}</b>
      <br />
      {activity}
      <br />
      <i>{years}</i>
      <br />
    </p>
  </ListItem>
)

const About = () => {
  const { t } = useTranslation(['about'])

  return (
    <Fragment>
      <SEO
        title={t(['about:title', 'About me'])}
        description={t(['about:description', 'Brief information about me'])}
      />
      <Layout path="/about/">
        <div sx={{ maxWidth: 768 }}>
          <Themed.h1>{t(['about:title', 'About me'])}</Themed.h1>
          <Themed.h2>{t(['about:education', 'Education'])}</Themed.h2>
          <List>
            <EducationItem
              icon={() => <RudnIcon sx={{ fill: 'text' }} />}
              title={() => (
                <Themed.h3 sx={{ m: 0 }}>
                  <Themed.a href="http://eng.rudn.ru/">
                    {t([
                      'about:university',
                      'The Peoples` Friendship University of Russia',
                    ])}
                  </Themed.a>
                </Themed.h3>
              )}
              department={t(['about:department', 'Engineering academy'])}
              specialization={t([
                'about:specialization',
                'Applied Mathematics and Computer Science',
              ])}
              degree={t(['about:bachelor', 'bachelor`s degree'])}
              years="2016-2020"
            />
            <EducationItem
              icon={() => <RudnIcon sx={{ fill: 'text' }} />}
              title={() => (
                <Themed.h3 sx={{ m: 0 }}>
                  <Themed.a href="http://eng.rudn.ru/">
                    {t([
                      'about:university',
                      'The Peoples` Friendship University of Russia',
                    ])}
                  </Themed.a>
                </Themed.h3>
              )}
              department={t(['about:department', 'Engineering academy'])}
              specialization={t([
                'about:specialization',
                'Applied Mathematics and Computer Science',
              ])}
              degree={t(['about:master', 'master`s degree'])}
              years={`${t(['about:since', 'since'])} 2020`}
            />
          </List>
          <Themed.h2>{t(['about:companies', 'Companies'])}</Themed.h2>
          <List>
            <CompanyItem
              icon={() => (
                <VistaIcon sx={{ fill: 'text', width: 100, height: 100 }} />
              )}
              title={() => (
                <Themed.h3 sx={{ m: 0 }}>
                  <Themed.a href="http://vista-co.ru/">Vista group</Themed.a>
                </Themed.h3>
              )}
              position={t(['about:admin', 'System Administrator'])}
              activity={t([
                'about:support',
                'Technical support of office local network',
              ])}
              years="2016-2018"
            />
            <CompanyItem
              icon={() => (
                <DasIcon sx={{ fill: 'text', width: 100, height: 100 }} />
              )}
              title={() => (
                <Themed.h3 sx={{ m: 0 }}>
                  <Themed.a href="https://da-strateg.ru/">
                    {t(['about:daStrategy', 'DaStrategy'])}
                  </Themed.a>
                </Themed.h3>
              )}
              position={t(['about:frontend', 'Frontend developer'])}
              activity={t([
                'about:DaSactivity',
                'Development of interactive annual reports, ERP/CRM systems prototyping',
              ])}
              years="2017-2019"
            />
            <CompanyItem
              icon={() => (
                <T2chIcon sx={{ fill: 'text', width: 100, height: 100 }} />
              )}
              title={() => (
                <Themed.h3 sx={{ m: 0 }}>
                  <Themed.a href="https://t2ch.io/">Time2Chain</Themed.a>
                </Themed.h3>
              )}
              position={t(['about:fullstack', 'Fullstack JS developer'])}
              activity={t([
                'about:T2CHactivity',
                'Development of an overlay peer-to-peer network for an open blockchain platform. Development of a block explorer. Development of a node`s console interface',
              ])}
              years="2018-2019"
            />
            <CompanyItem
              icon={() => (
                <TextIcon
                  fontSize="5em"
                  text="Z"
                  sx={{ fill: 'text', width: 100, height: 100 }}
                />
              )}
              title={() => (
                <Themed.h3 sx={{ m: 0 }}>
                  {t(['about:sp', 'SP Zhelvis Vladimir Algirdovich'])}
                </Themed.h3>
              )}
              position={t(['about:spPosition', 'CEO, software developer'])}
              activity={t([
                'about:spActivity',
                'Operational management, system architecture design, software development',
              ])}
              years={`${t(['about:since', 'since'])} 2019`}
            />
            <CompanyItem
              icon={() => (
                <TextIcon
                  fontSize="5em"
                  text="I"
                  sx={{ fill: 'text', width: 100, height: 100 }}
                />
              )}
              title={() => (
                <Themed.h3 sx={{ m: 0 }}>
                  <Themed.a href="https://inforser.ru/">
                    {t(['about:inforser', 'Inforser'])}
                  </Themed.a>
                </Themed.h3>
              )}
              position={t(['about:engineer', 'Software engineer'])}
              activity={t(['about:infActivity', 'ERP/CRM systems development'])}
              years={`${t(['about:since', 'since'])} 2020`}
            />
          </List>
        </div>
      </Layout>
    </Fragment>
  )
}

export default About
