import React, { useState, useEffect } from 'react'
import logo from '../images/dsc-logo-large.png'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

export default ({ register }) => {
  const [sticky, setSticky] = useState(false)

  useEffect(() => {
    const cb = _ => {
      setSticky(window.scrollY > 100)
    }
    window.addEventListener('scroll', cb, { passive: true })
    return () => {
      window.removeEventListener('scroll', cb)
    }
  }, [])

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      fixed="top"
      className={
        'custom-menu custom-menu__light' + (sticky ? ' navbar-is-sticky' : '')
      }
    >
      <Container>
        <a className="navbar-brand" href="/">
          <img src={logo} className="logo-sm" alt="dsc logo" />
        </a>
        <Navbar.Toggle
          aria-controls="navbarSupportedContent"
          aria-label="Toggle navigation"
        >
          <span className="menu-icon__circle"></span>
          <span className="menu-icon">
            <span className="menu-icon__bar"></span>
            <span className="menu-icon__bar"></span>
            <span className="menu-icon__bar"></span>
          </span>
        </Navbar.Toggle>
        <Navbar.Collapse>
          <Nav className="ml-lg-auto">
            <Nav.Item>
              <Nav.Link href="#overview">Overview</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#technologies">Technologies</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#workshops">Workshops</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#team">Team</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#faqs">Faqs</Nav.Link>
            </Nav.Item>
          </Nav>
          <div className="custom-menu__right">
            <a
              href={register}
              className="event-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-users"></i> Become a member
            </a>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
