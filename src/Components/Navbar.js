// Navbar.js

import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

function AppNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="#home">News App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#politics">Politics</Nav.Link>
            <Nav.Link href="#technology">Technology</Nav.Link>
            <Nav.Link href="#business">Business</Nav.Link>
            {/* Add more categories as needed */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
