import React from "react";
import { Container, Navbar, Nav, Col } from "react-bootstrap";
import News from "./Components/News";

function App() {
  const newsTypes = [
    "Politics",
    "Technology",
    "Business",
    // "Health",
    // "Environment",
    // "Fashion",
    // "Travel",
    // "Food",
    // "World",
    // "Education",
    // "Culture",
    // "Finance",
    // Add more categories as needed
  ];

  return (
    <Container>
      <Navbar bg="light" expand="lg" fixed="top">
        <Navbar.Brand href="#">Professional News Dashboard</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {newsTypes.map((type, index) => (
              <Nav.Link key={index} href={`#${type.toLowerCase()}`}>
                {type}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <div style={{ marginTop: "70px" }}> {/* Adjust the margin based on your navbar height */}
        {newsTypes.map((type, index) => (
          <Col key={index} id={type.toLowerCase()}>
            <h2>{type}</h2>
            <News type={type} />
          </Col>
        ))}
      </div>
    </Container>
  );
}

export default App;
