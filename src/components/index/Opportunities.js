import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Opportunity from './Opportunity'
import { graphql, useStaticQuery } from 'gatsby'

const Opportunities = () => {
  const {
    opportunitiesYaml: {
      header,
      opportunities: [opp1, opp2, opp3, opp4],
    },
  } = useStaticQuery(graphql`
    {
      opportunitiesYaml {
        header
        opportunities
      }
    }
  `)

  return (
    <section id="opportunities" className="section-spacer section-opp">
      <Container>
        <header className="section-header text-center">
          <h2 className="section-title-custom">{header}</h2>
        </header>
        <Row>
          <Opportunity text={opp1} />
          <Opportunity text={opp2} />
        </Row>
        <Row>
          <Opportunity text={opp3} />
          <Opportunity text={opp4} />
        </Row>
      </Container>
    </section>
  )
}

export default Opportunities
