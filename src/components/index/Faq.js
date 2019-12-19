import React from 'react'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

const Faq = ({ header, body }) => (
  <Col sm={6}>
    <Card body>
      <h5 className="card-title">{header}</h5>
      <p>{body}</p>
    </Card>
  </Col>
)

export default Faq
