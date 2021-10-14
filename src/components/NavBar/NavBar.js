import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./NavBar.css";
import Logo from "../../images/logo.png";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const NavBar = () => {
  const { user, logOut } = useAuth();
  return (
    <div>
      <Navbar bg="light" className="my-2" sticky="top">
        <Container fluid>
          <NavLink to="/">
            <Navbar.Brand>
              <img
                src={Logo}
                width="150"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Navbar.Brand>
          </NavLink>
          <Nav className="ms-auto">
            {user.email ? (
              <button
                className="btn btn-danger rounded-pill me-2"
                onClick={logOut}
              >
                Log Out
              </button>
            ) : (
              <NavLink to="/login" className="fw-bold login-btn me-3">
                Login
              </NavLink>
            )}
            <NavLink to="/signup" className="signup-btn me-2">
              Sign Up
            </NavLink>
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>Signed in as: {user.displayName}</Navbar.Text>
            </Navbar.Collapse>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
