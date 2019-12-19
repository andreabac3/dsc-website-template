import React from 'react'
import Col from 'react-bootstrap/Col'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Overview = ({ header, body, icon, className }) => (
  <Col xs={12} md={4}>
    <div className="feature-card">
      <div className="feature-card__body">
        <FontAwesomeIcon
          icon={icon}
          size="3x"
          className={`fa-icon ${className}`}
        />
        <h4 className="feature-title">{header}</h4>
        <p>{body}</p>
      </div>
    </div>
  </Col>
)

export default Overview
