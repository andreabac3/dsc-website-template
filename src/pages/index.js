import React from 'react'
import Layout from '../components/Layout'
import Header from '../components/index/Header'
import Overview from '../components/index/Overview'
import Opportunities from '../components/index/Opportunities'
import Technologies from '../components/index/Technologies'
import Teams from '../components/index/Teams'
import Faqs from '../components/index/Faqs'

export const teamsQuery = graphql`
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
`

export default ({
  data: {
    site: {
      siteMetadata: { university, register },
    },
  },
}) => (
  <Layout>
    <Header {...{ university, register }} />
    <Overview />
    <Opportunities />
    <Technologies />
    <Teams />
    <Faqs register={register} />
  </Layout>
)
