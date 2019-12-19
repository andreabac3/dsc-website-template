import React from 'react'
import Img from 'gatsby-image'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as icons from '../../icons'

const Team = ({ name, role, descs, img, social }) => (
  <Col xs={12} md={4} className="col-md-4 col-15">
    <Card className="card event-card">
      <Card className="hovercard">
        <Card.Header />
        <div className="avatar">
          <Img fixed={img.childImageSharp.fixed} alt={`${role} avatar`} />
        </div>
        <div className="info">
          <div className="title">
            <h5>{name}</h5>
            <p>{role}</p>
          </div>
          {descs.map((desc, i) => (
            <div key={i} className="desc">
              {desc}
            </div>
          ))}
        </div>
        <div className="bottom">
          <ul className="social-list__inline mt-10">
            {Object.entries(social)
              .filter(([, link]) => link != null)
              .map(([name, link]) => (
                <li key={name}>
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={icons[name]} />
                  </a>
                </li>
              ))}
          </ul>
        </div>
      </Card>
    </Card>
  </Col>
)

export default Team
