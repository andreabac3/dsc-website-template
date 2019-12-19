import React from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

export default () => (
  <section id="overview" className="section-spacer">
    <Container>
      <Row>
        <Col xs={12} md={4}>
          <div className="feature-card">
            <div className="feature-card__body">
              <i className="fas fa-rocket ghost-blue"></i>
              <h4 className="feature-title">Concept of DSC</h4>
              <p>
                The DSC program is a grassroots channel through which Google
                provides development skills, mobile and web development skills
                for students, towards employability.
              </p>
            </div>
          </div>
        </Col>
        <Col xs={12} md={4}>
          <div className="feature-card">
            <div className="feature-card__body">
              <i className="fas fa-lightbulb ghost-green"></i>
              <h4 className="feature-title">Why DSC?</h4>
              <p>
                For students to learn development skills, solve problems through
                technology and inspire them to be world-class developers and
                changemakers.
              </p>
            </div>
          </div>
        </Col>
        <Col xs={12} md={4}>
          <div className="feature-card m-0">
            <div className="feature-card__body">
              <i className="fas fa-users ghost-red"></i>
              <h4 className="feature-title">Target audience</h4>
              <p>
                DSC activities are targeted at University students and any
                others including faculty members who want to learn development
                skills &amp; work to solve real-life problems.
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
)
