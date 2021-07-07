import React from "react";
import { Navbar, Nav } from "react-bootstrap";

function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="home">Github-User-Repo</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="home">Home</Nav.Link>
          <Nav.Link href="user">Search User</Nav.Link>
          <Nav.Link href="favorite">Repositories</Nav.Link>
          <Nav.Link href="about">About</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
