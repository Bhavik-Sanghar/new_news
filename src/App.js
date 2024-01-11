import React, { useState } from "react";
import { Container, Navbar, Nav, NavDropdown, Col } from "react-bootstrap";
import News from "./Components/News";
import logo from "../src/Asstes/logo.png"

function App() {
  const newsTypes = [
    "Entertainment",
    "Trending",
    "Technology",
    "Business",
    "Health",
    "Environment",
    "Fashion",
    "Travel",
    "Food",
    "World",
    "Education",
    "Culture",
    "Finance",
    // Add more categories as needed
  ];

  const [selectedCategory, setSelectedCategory] = useState(newsTypes[0]);

  return (
    <Container>
      <Navbar className="Nav" expand="lg" fixed="top">
        <Navbar.Brand className="logo" href="#"> <img  src={logo} alt="Logo" style={{ width: '100px', height: '100px' }} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-right">
            <NavDropdown title="Categories" className="N" id="basic-nav-dropdown">
              {newsTypes.map((type, index) => (
                <NavDropdown.Item className="ND"
                  key={index}
                  onClick={() => setSelectedCategory(type)}
                >
                  {type}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <div style={{ marginTop: "70px" }}>
        {newsTypes.map((type, index) => (
          <Col
            key={index}
            id={type.toLowerCase()}
            style={{ display: type === selectedCategory ? "block" : "none" }}
          >
            {/* <h2 className="title" id="head">{type}</h2> */}
            <News type={type} />
          </Col>
        ))}
      </div>
    </Container>
  );
}

export default App;
