import React from 'react'
import {Link} from "react-router-dom"
import { Navbar, Container, Nav } from 'react-bootstrap'
import  "./Style.css"
function Menu() {
  return (
    <>

      <Navbar bg="dark">
        <Container>
        <Navbar.Brand href="#"  className="text-light">
            <img
              alt="logo"
              src="/image/logo.jpg"
              width="30"
              height="30"
              className="d-inline-block align-top"
             
            />
            MOSHAAZ
          </Navbar.Brand>
        </Container>
      </Navbar>

      <Navbar expand="lg" className="bg-info">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link to="/"><Link to="/" >Home</Link></Nav.Link>
              <Nav.Link to="/"><Link to="/about" >About</Link></Nav.Link>
              <Nav.Link to="/"><Link to="/contact" >Contact</Link></Nav.Link>
              <Nav.Link to="/"><Link to="/news" >News</Link></Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Menu