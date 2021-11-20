import React, { useEffect, useState } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import "./Foods.css";
import Data from "../../data/allData";

const Foods = () => {
  const [items, setItems] = useState(Data);
  const filterItem = (categoryItem) => {
    const updateItem = Data.filter((currentElement) => {
      return currentElement.category === categoryItem;
    });
    setItems(updateItem);
  };

  useEffect(() => {
    filterItem("Breakfast");
  }, []);

  return (
    <div className="foods-container">
      <Container>
        <div className="d-flex justify-content-evenly mt-5">
          <button
            className="btn btn-warning"
            onClick={() => filterItem("Breakfast")}
          >
            Breakfast
          </button>
          <button
            className="btn btn-warning"
            onClick={() => filterItem("Lunch")}
          >
            Lunch
          </button>
          <button
            className="btn btn-warning"
            onClick={() => filterItem("Dinner")}
          >
            Dinner
          </button>
        </div>
        <div className="mt-4">
          <Row>
            {items.map((item) => {
              const { title, price, desc, image, id } = item;
              return (
                <Col key={id}>
                  <Card
                    style={{ width: "19rem", border: "none" }}
                    className="card-container mb-3 p-2"
                  >
                    <Card.Img variant="top" src={image} alt={title} />
                    <Card.Body className="text-center">
                      <Card.Title>{title}</Card.Title>
                      <Card.Text>{desc}</Card.Text>
                      <p>${price}</p>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Foods;
