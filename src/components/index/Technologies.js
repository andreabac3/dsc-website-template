import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Technology from './Technology'

const Technologies = () => {
  const {
    technologiesYaml: { header, subheader, technologies },
  } = useStaticQuery(graphql`
    {
      technologiesYaml {
        header
        subheader
        technologies {
          body
          header
          link
          img {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  return (
    <>
      {technologies.map((technology, i) => (
        <Technology {...technology} even={i % 2 === 0} key={i}>
          {i !== 0 ? null : (
            <header className="section-header text-center">
              <h2 className="section-title">{header}</h2>
              <p className="section-subtitle">{subheader}</p>
              <br />
            </header>
          )}
        </Technology>
      ))}
    </>
  )
}

export default Technologies
