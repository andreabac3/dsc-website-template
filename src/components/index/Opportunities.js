import React from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'

export default () => (
  <section id="opportunities" className="section-spacer section-opp">
    <Container>
      <header className="section-header text-center">
        <h2 className="section-title-custom">
          Opportunities DSCs provide students with
        </h2>
      </header>
      <Row>
        <Col sm={6}>
          <Card body>
            <ul>
              <li>
                Grow their knowledge on developer technologies and more through
                peer to peer workshops and vents.
              </li>
            </ul>
          </Card>
        </Col>
        <Col sm={6}>
          <Card body>
            <ul>
              <li>
                Gain relevant industry experience by solving problems for local
                organizations with technology based solutions.
              </li>
            </ul>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col sm={6}>
          <Card body>
            <ul>
              <li>
                Showcase their prototypes and solutions to their local community
                and industry leaders.
              </li>
            </ul>
          </Card>
        </Col>
        <Col sm={6}>
          <Card body>
            <ul>
              <li>
                Getting inspiration to become world-class developers and
                changemakers from sharing others' success stories.
              </li>
            </ul>
          </Card>
        </Col>
      </Row>
    </Container>
  </section>
)
