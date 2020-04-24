import React from 'react'
import Nav from './Nav'
import Footer from './Footer'
import Seo from './Seo'
import { useStaticQuery, graphql } from 'gatsby'
import './Layout.scss'

const Layout = ({ children }) => {
  const {
    websiteYaml: { title, lang, description, register },
  } = useStaticQuery(graphql`
    {
      websiteYaml {
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
  `)

  return (
    <>
      <Seo {...{ title, lang, description }} />
      <Nav register={register} />
      {children}
      <Footer />
    </>
  )
}

export default Layout
