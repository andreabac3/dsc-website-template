import React from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import logo from '../images/dsc-logo-large.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTwitter,
  faGithub,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons'

export default ({ social, mail }) => (
  <footer className="section-spacer footer-section">
    <Container>
      <Row className="flex-column-reverse flex-sm-row flex-lg-row">
        <Col xs={12} md={4}>
          <div className="footer-widget first-of-footer-widget">
            <img src={logo} alt="dsc logo" className="logo-sm mb-10" />
            <p>&copy; {new Date().getFullYear()} | All Rights Reserved.</p>
            {mail && (
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
            <Col md={4} xs={6}>
              <div className="footer-widget">
                <h4 className="footer-widget__title">Programs</h4>
                <ul className="list-unstyled">
                  <li>
                    <a
                      href="https://www.womentechmakers.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Women Techmakers
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://developers.google.com/experts/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Google Developer Experts
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://developers.google.com/programs/community/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Google Developer Groups
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col md={4} xs={6}>
              <div className="footer-widget">
                <h4 className="footer-widget__title">Developers</h4>
                <ul>
                  {/* <li className="list-unstyled"> */}
                  <li>
                    <a
                      href="https://console.firebase.google.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Firebase console
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://console.cloud.google.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Google Cloud Platform
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://console.actions.google.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Actions on Google
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col md={4}>
              <div className="footer-widget">
                <h4 className="footer-widget__title">Contribute</h4>
                <ul className="list-unstyled">
                  <li>
                    <a
                      href="https://github.com/DSCEksu/dsceksu-laravel/issues/new?template=documentation-bug.md"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      File a bug
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/DSCEksu/dsceksu-laravel"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View source
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  </footer>
)
