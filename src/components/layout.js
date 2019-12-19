import React from 'react'
import Nav from './Nav'
import Footer from './Footer'
import Seo from './Seo'
import { useStaticQuery, graphql } from 'gatsby'
import './Layout.scss'

const Layout = ({ children }) => {
  const {
    site: {
      siteMetadata: { title, lang, description, register, social, mail },
    },
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
          university
          lang
          register
          mail
          social {
            youtube
            github
            twitter
          }
        }
      }
    }
  `)

  return (
    <>
      <Seo {...{ title, lang, description }} />
      <Nav register={register} />
      {children}
      <Footer {...{ social, mail }} />
    </>
  )
}

export default Layout
