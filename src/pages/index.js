import React from 'react'
import Layout from '../components/Layout'
import Header from '../components/index/Header'
import Overviews from '../components/index/Overviews'
import Opportunities from '../components/index/Opportunities'
import Technologies from '../components/index/Technologies'
import Teams from '../components/index/Teams'
import Faqs from '../components/index/Faqs'

const Index = () => (
  <Layout>
    <Header />
    <Overviews />
    <Opportunities />
    <Technologies />
    <Teams />
    <Faqs />
  </Layout>
)

export default Index
