import React from 'react'
import Layout from '../components/Layout'
import Header from '../components/index/Header'
import Overviews from '../components/index/Overviews'
import Opportunities from '../components/index/Opportunities'
import Technologies from '../components/index/Technologies'
import Teams from '../components/index/Teams'
import Faqs from '../components/index/Faqs'
import { graphql } from 'gatsby'

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

const Index = ({
  data: {
    site: {
      siteMetadata: { university, register },
    },
  },
}) => (
  <Layout>
    <Header {...{ university, register }} />
    <Overviews />
    <Opportunities />
    <Technologies />
    <Teams />
    <Faqs register={register} />
  </Layout>
)

export default Index
