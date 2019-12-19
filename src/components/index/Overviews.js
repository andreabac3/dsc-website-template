import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Overview from './Overview'
import { graphql, useStaticQuery } from 'gatsby'

import {
  faRocket,
  faLightbulb,
  faUsers,
} from '@fortawesome/free-solid-svg-icons'

const Overviews = () => {
  const {
    allOverviewYaml: { nodes: overviews },
  } = useStaticQuery(graphql`
    {
      allOverviewYaml(limit: 3) {
        nodes {
          header
          body
        }
      }
    }
  `)

  const icons = [
    {
      icon: faRocket,
      className: 'ghost-blue',
    },
    {
      icon: faLightbulb,
      className: 'ghost-red',
    },
    {
      icon: faUsers,
      className: 'ghost-green',
    },
  ]

  return (
    <section id="overview" className="section-spacer">
      <Container>
        <Row>
          {overviews.map((overview, i) => (
            <Overview {...overview} {...icons[i]} key={i} />
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Overviews
