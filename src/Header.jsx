import React from "react";
import { BrowserRouter as Router, useHistory } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

export default function Header(props) {
  return (
    <Router>
      <HeaderContainer />
    </Router>
  );
}

function HeaderContainer(props) {
  const history = useHistory();

  return (
    <Container fluid className="firemark-header shadow-bottom-7">
      <Navbar variant="dark">
        <Navbar.Brand>
          <h1 className="display-3">Firemark</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="header-navbar-nav" />
        <Navbar.Collapse id="header-navbar-nav" className="justify-content-end">
          <Nav
            defaultActiveKey="game"
            onSelect={(key) => history.push("/" + key)}
          >
            <Nav.Item>
              <Nav.Link eventKey="game">Game</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="creator">Creator</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}
