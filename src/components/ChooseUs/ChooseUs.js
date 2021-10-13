import React from "react";
import { Card, CardGroup, Container } from "react-bootstrap";
import "./ChooseUs.css";
import FirstDelevery from "../../images/choose-us/first-delivery.png";
import ChefCookFood from "../../images/choose-us/chef-cook-food.png";
import HomeDelevery from "../../images/choose-us/home-delivery.png";
import FirstDeleveryIcon from "../../images/icon/delevery.png";
import ResponderIcon from "../../images/icon/responder.png";
import HomeDeleveryIcon from "../../images/icon/home-delevery.png";

const ChooseUs = () => {
  return (
    <div className="mt-4">
      <Container>
        <div className="w-50">
          <h2>Why you choose us</h2>
          <p>
            Barton waited twenty always repair in within we do. An delighted
            offending curiosity my is dashwoods at. Boy prosperous increasing
            surrounding.
          </p>
        </div>
        <CardGroup>
          <Card className="mx-1 border-0">
            <Card.Img variant="top" src={FirstDelevery} />
            <Card.Body>
              <div className="d-flex">
                <div>
                  <img src={FirstDeleveryIcon} alt="" />
                </div>
                <div className="ms-3">
                  <Card.Title>Fast Delevery</Card.Title>
                  <Card.Text className="text-align">
                    Keep your systems in sync with automated web hook based
                    notifications each time link is paid and how we dream about
                    our future.
                  </Card.Text>
                </div>
              </div>
            </Card.Body>
          </Card>
          <Card className="mx-1 border-0">
            <Card.Img variant="top" src={ChefCookFood} />
            <Card.Body>
              <div className="d-flex">
                <div>
                  <img src={ResponderIcon} alt="" />
                </div>
                <div className="ms-3">
                  <Card.Title>A Good Auto Responder</Card.Title>
                  <Card.Text className="text-align">
                    Keep your systems in sync with automated web hook based
                    notifications each time link is paid and how we dream about
                    our future.
                  </Card.Text>
                </div>
              </div>
            </Card.Body>
          </Card>
          <Card className="mx-1 border-0">
            <Card.Img variant="top" src={HomeDelevery} />
            <Card.Body>
              <div className="d-flex">
                <div>
                  <img src={HomeDeleveryIcon} alt="" />
                </div>
                <div className="ms-3">
                  <Card.Title>Home Delevery</Card.Title>
                  <Card.Text className="text-align">
                    Keep your systems in sync with automated web hook based
                    notifications each time link is paid and how we dream about
                    our future.
                  </Card.Text>
                </div>
              </div>
            </Card.Body>
          </Card>
        </CardGroup>
      </Container>
    </div>
  );
};

export default ChooseUs;
