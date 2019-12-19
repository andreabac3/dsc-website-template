import React from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import logo from '../images/dsc-logo-large.png'
import FooterWidget from './FooterWidget'
import { useStaticQuery, graphql } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTwitter,
  faGithub,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons'

const Footer = ({ social, mail }) => {
  const {
    allFooterYaml: { nodes: widgets },
  } = useStaticQuery(graphql`
    {
      allFooterYaml {
        nodes {
          header
          links {
            link
            name
          }
        }
      }
    }
  `)

  return (
    <footer className="section-spacer footer-section">
      <Container>
        <Row className="flex-column-reverse flex-sm-row flex-lg-row">
          <Col xs={12} md={4}>
            <div className="footer-widget first-of-footer-widget">
              <img src={logo} alt="dsc logo" className="logo-sm mb-10" />
              <p>&copy; {new Date().getFullYear()} | All Rights Reserved.</p>
              {mail == null ? null : (
                <>
                  <span>Feel free to drop us an email at </span>
                  <a href="mailto:"> {mail} </a>{' '}
                </>
              )}
              <ul className="social-list__inline mt-10">
                {Object.entries({
                  twitter: faTwitter,
                  github: faGithub,
                  youtube: faYoutube,
                })
                  .filter(([name]) => name in social)
                  .map(([name, icon]) => (
                    <li key={name}>
                      <a
                        href={social[name]}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FontAwesomeIcon icon={icon} />
                      </a>
                    </li>
                  ))}
              </ul>
            </div>
          </Col>

          <Col md={8} xs={10}>
            <Row>
              {widgets.map(widget => (
                <FooterWidget {...widget} />
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
