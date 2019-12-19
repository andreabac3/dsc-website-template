import React from 'react'
import Col from 'react-bootstrap/Col'

const FooterWidget = ({ header, links }) => (
  <Col md={4} xs={6}>
    <div className="footer-widget">
      <h4 className="footer-widget__title">{header}</h4>
      <ul className="list-unstyled">
        {links.map(({ name, link }, i) => (
          <li key={i}>
            <a href={link} target="_blank" rel="noopener noreferrer">
              {name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </Col>
)

export default FooterWidget
