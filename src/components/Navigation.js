import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function Navigation() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="https://platform.openai.com/docs/introduction"
              target="_blank"
            >
              Open AI Documentation
            </Nav.Link>
            <NavDropdown title="Options" id="collasible-nav-dropdown">
              <NavDropdown.Item href="sql-requests">
                SQL Request
              </NavDropdown.Item>
              <NavDropdown.Item href="grammar-correction">
                Grammar Correction
              </NavDropdown.Item>
              <NavDropdown.Item href="time-complexity">
                Calculate Time Complexity
              </NavDropdown.Item>
              <NavDropdown.Item href="explain-code">
                Explain Code
              </NavDropdown.Item>
              <NavDropdown.Item href="translate-programming-lang">
                Translate Programming Language
              </NavDropdown.Item>
              <NavDropdown.Item href="text-summarizer">
                Text Summarizer
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="contacts">Contacts</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
