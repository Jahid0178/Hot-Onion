import React from "react";
import { Form, Button } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";
import "./LogIn.css";

const LogIn = () => {
  const { signInUsingGoogle } = useAuth();
  return (
    <div className="login-container d-flex justify-content-center align-items-center">
      <div className="border border-2 p-3 rounded-1">
        <h2 className="text-danger">Login your account</h2>
        <Form onSubmit={(e) => e.preventDefault()}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
          <br />
          <div className="text-center mt-2">
            -----------------OR-----------------
          </div>
          <div className="mt-2">
            <button className="btn btn-warning" onClick={signInUsingGoogle}>
              Google Sign In
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default LogIn;
