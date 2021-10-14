import React from "react";
import { Container, Nav, Navbar, NavLink } from "react-bootstrap";
import "./NavBar.css";
import Logo from "../../images/logo.png";

const NavBar = () => {
  return (
    <div>
      <Navbar bg="light" className="my-2" sticky="top">
        <Container fluid>
          <Navbar.Brand href="#home">
            <img
              src={Logo}
              width="150"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Nav className="ms-auto">
            <NavLink to="/login" className="fw-bold">
              Login
            </NavLink>
            <NavLink to="/signup" className="signup-btn">
              Sign Up
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
