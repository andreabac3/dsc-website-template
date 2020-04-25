import React from 'react'
import Container from 'react-bootstrap/Container'
import { graphql, useStaticQuery } from 'gatsby'

const Location = () => {
  const {
    locationYaml: { header, src },
  } = useStaticQuery(graphql`
    {
      locationYaml {
        header
        src
      }
    }
  `)

  return src === '' ? null : (
    <section id="location" className="section-spacer">
      <Container>
        <header className="text-center">
          <h2 className="section-title">{header}</h2>
        </header>
        <div className="embed-responsive embed-responsive-21by9">
          <iframe
            className="embed-responsive-item"
            src={src}
            width="600"
            height="450"
            frameborder="0"
            style={{ border: 0 }}
            allowfullscreen=""
            aria-hidden="false"
            title="location"
            tabindex="0"
          ></iframe>
        </div>
      </Container>
    </section>
  )
}

export default Location
