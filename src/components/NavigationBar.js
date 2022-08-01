import React from 'react'
import{Navbar,Nav,NavLink,} from 'react-bootstrap'
import{Link} from 'react-router-dom'
import "../styles/NavigationBar.css";
function NavigationBar() {
  return (
    <>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Toggle aria-controls="navbarScrolls" data-bs-target="#navbarScroll"/>
        <Navbar.Collapse id="navbarScrolls">
            <Nav>
                <NavLink as={Link} to="/" >Home</NavLink>
                <NavLink as={Link} to="/projects" >Projects</NavLink>
                <NavLink as={Link} to="/experience" >Experience</NavLink>
            </Nav>
        </Navbar.Collapse>
  </Navbar>
  </>
  )
}

export default NavigationBar