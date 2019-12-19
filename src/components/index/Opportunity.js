import React from 'react'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

const Opportunity = ({ text }) => (
  <Col sm={6}>
    <Card body>
      <ul>
        <li>{text}</li>
      </ul>
    </Card>
  </Col>
)

export default Opportunity
