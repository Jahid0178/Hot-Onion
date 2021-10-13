import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css";
import FooterLogo from "../../images/footer-logo.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <Container>
        <div className="p-5">
          <Row className="mb-5">
            <Col>
              <img src={FooterLogo} alt="" className="footer-logo" />
            </Col>
            <Col className="ms-5 ps-5">
              <ul className="footer-ul">
                <li className="text-white">About Online Food</li>
                <li className="text-white">Read Our Blog</li>
                <li className="text-white">Sign up to deliver</li>
                <li className="text-white">Add your restaurant</li>
              </ul>
            </Col>
            <Col>
              <ul className="footer-ul">
                <li className="text-white">Get help</li>
                <li className="text-white">Read FAQs</li>
                <li className="text-white">View all cities</li>
                <li className="text-white">Restaurant near me</li>
              </ul>
            </Col>
          </Row>
          <div className="d-flex justify-content-between">
            <div className="text-white">
              <p>Copyright &copy; 2021 Online Food</p>
            </div>
            <div className="text-white">
              <span className="mx-3">Privacy Policy</span>
              <span className="mx-5">Terms of Use</span>
              <span>Pricing</span>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
