import React from 'react'
import {Navbar,Nav,Container} from 'react-bootstrap'
function Menu() {
  return (
    <>
    <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link to="/">Home</Nav.Link>
            <Nav.Link to="/headphone">Headphone</Nav.Link>
            <Nav.Link to="/mobile">Mobile</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Menu
