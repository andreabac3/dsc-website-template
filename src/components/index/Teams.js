import React from 'react'
import Team from './Team'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { useStaticQuery, graphql } from 'gatsby'

export default _ => {
  const {
    allTeamsYaml: { edges },
  } = useStaticQuery(graphql`
    {
      allTeamsYaml {
        edges {
          node {
            name
            rule
            descs
            img {
              childImageSharp {
                fixed(width: 100, height: 100) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            social {
              twitter
              github
              linkedin
            }
          }
        }
      }
    }
  `)

  return (
    <section id="team" className="section-spacer team-section">
      <Container>
        <header className="text-center section-header">
          <h2 className="section-title">Meet The DSC Team</h2>
          <p className="section-subtitle">
            Passionate students and faculty staff driving the success of the
            program.
          </p>
        </header>

        <Container>
          <Row>
            {edges.map(({ node }, i) => (
              <Team {...node} key={i} />
            ))}
          </Row>
        </Container>
      </Container>
    </section>
  )
}
