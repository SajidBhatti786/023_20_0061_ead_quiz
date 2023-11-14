import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";

const Navbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Navbar.Brand href="#home">
        <h1>FASTECH</h1>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {/* Add your menu items here */}
          <Nav.Link href="#home">HOME</Nav.Link>
          <Nav.Link href="#features">MY PROFILE</Nav.Link>
          <Nav.Link href="#contact">ACTIVITY</Nav.Link>
          <Nav.Link href="#contact">HOW IT </Nav.Link>
        </Nav>
      </Navbar.Collapse>

      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          <Button variant="outline-light" className="mr-2">
            Create
          </Button>
          <Button variant="outline-light">Sign In</Button>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navbar;
