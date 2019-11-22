import React from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import android from '../../images/technologies/android.png'
import web from '../../images/technologies/web.png'
import cloud from '../../images/technologies/cloud.png'
import mi from '../../images/technologies/mi.png'

export default () => (
  <>
    <section id="technologies" className="section-spacer bg-very__gray">
      <Container>
        <header className="section-header text-center">
          <h2 className="section-title">Technologies we're excited about</h2>
          <p className="section-subtitle">
            Opportunities to learn & access deep technical content.
          </p>
          <br />
        </header>
        <Row className="align-items-center">
          <Col sm={6}>
            <div className="feature-list-image">
              <img
                src={android}
                className="img-fluid"
                alt="Official android logo"
                width="100%"
                height="50%"
              />
            </div>
          </Col>
          <Col sm={5} ml="auto" className="ml-auto">
            <div className="feature-list-wrapper">
              <div className="content-header">
                <h2 className="content-title">Android Development</h2>
                <p>
                  Every year Google developers release exciting new updates to
                  the world's most popular operating system. We always have
                  sessions to keep you updated and mastering the latest trends
                  in modern Android development.
                </p>
              </div>
              <a
                href="https://codelabs.developers.google.com/?cat=Android"
                className="hero-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                Codelabs &nbsp; &nbsp;
                <i className="fas fa-external-link-alt"></i>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>

    <section className="section-spacer">
      <Container>
        <Row className="flex-column-reverse flex-sm-row align-items-cengit ter">
          <Col sm={5} className="mr-auto">
            <div className="feature-list-wrapper">
              <div className="content-header">
                <h2 className="content-title">Web Development</h2>
                <p>
                  Learn the core foundations of a delightful web experience both
                  for the user and developer. Stay up to tabs with emerging and
                  trending technologies. Get access to a guided, tutorial and
                  hands-on coding experience.
                </p>
              </div>
              <a
                href="https://codelabs.developers.google.com/?cat=Web"
                className="hero-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                Codelabs &nbsp; &nbsp;
                <i className="fas fa-external-link-alt"></i>
              </a>
            </div>
          </Col>
          <div className="col-sm-6">
            <div className="feature-list-image">
              <img
                src={web}
                alt="Developer building a progressive web app"
                className="img-fluid"
                height="60%"
                width="90%"
              />
            </div>
          </div>
        </Row>
      </Container>
    </section>
    <section className="section-spacer bg-very__gray">
      <Container>
        <Row className="align-items-center">
          <Col sm={6}>
            <div className="feature-list-image">
              <img
                src={cloud}
                className="img-fluid"
                alt="Illustration of data uploading to the cloud"
                width="90%"
              />
            </div>
          </Col>
          <Col sm={5} className="ml-auto">
            <div className="feature-list-wrapper">
              <div className="content-header">
                <h2 className="content-title">Cloud Computing</h2>
                <p>
                  For passionate developers who want to stay relevant in a cloud
                  first world where businesses demand for agility and innovation
                  and prompt rise of cloud-native applications to ridges gaps
                  between data, insight, and action.
                </p>
              </div>
              <a
                href="https://codelabs.developers.google.com/?cat=Cloud"
                className="hero-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                Codelabs &nbsp; &nbsp;
                <i className="fas fa-external-link-alt"></i>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>

    <section className="section-spacer">
      <Container>
        <Row className="flex-column-reverse flex-sm-row align-items-cengit ter">
          <Col sm={5} className="mr-auto">
            <div className="feature-list-wrapper">
              <div className="content-header">
                <h2 className="content-title">Machine Intelligence</h2>
                <p>
                  Learn how to drive user engagement and retention with
                  intelligent apps that are able to effectively serve users what
                  they need without the fuss by providing these systems with the
                  ability to utomatically learn and improve from experience
                  without being explicitly programmed.
                </p>
              </div>
              <a
                href="https://codelabs.developers.google.com/?cat=TensorFlow"
                className="hero-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                Codelabs &nbsp; &nbsp;
                <i className="fas fa-external-link-alt"></i>
              </a>
            </div>
          </Col>
          <Col sm={6}>
            <div className="feature-list-image">
              <img
                src={mi}
                className="img-fluid"
                alt="Robotic illustration of how many different things it can do"
                height="60%"
                width="90%"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  </>
)
