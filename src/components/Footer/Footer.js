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
            <Col xs={12} sm={12} md={7}>
              <img src={FooterLogo} alt="" className="footer-logo" />
            </Col>
            <Col xs={12} sm={12} md={2}>
              <ul className="footer-ul">
                <li className="text-white">About Online Food</li>
                <li className="text-white">Read Our Blog</li>
                <li className="text-white">Sign up to deliver</li>
                <li className="text-white">Add your restaurant</li>
              </ul>
            </Col>
            <Col xs={12} sm={12} md={3}>
              <ul className="footer-ul">
                <li className="text-white">Get help</li>
                <li className="text-white">Read FAQs</li>
                <li className="text-white">View all cities</li>
                <li className="text-white">Restaurant near me</li>
              </ul>
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={12} md={6} className="text-white">
              <p>Copyright &copy; 2021 Online Food</p>
            </Col>
            <Col xs={12} sm={12} md={6} className="text-white text-center">
              <span className="mx-3">Privacy Policy</span>
              <span className="mx-4">Terms of Use</span>
              <span>Pricing</span>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
