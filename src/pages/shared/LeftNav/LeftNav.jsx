import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Image1 from "../../../assets/1.png";
import Image2 from "../../../assets/2.png";
import Image3 from "../../../assets/3.png";

const LeftNav = () => {
  const [catagories, setCatagories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setCatagories(data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <div className="">
      <div>
        <h4 className="bg-secondary text-light px-4 py-3">National News</h4>
        {catagories.map((category) => (
          <p key={category.id}>
            <Link
              to={`/category/${category.id}`}
              class="text-decoration-none px-4"
            >
              {category.name}
            </Link>
          </p>
        ))}
      </div>
      <div>
        <Row>
          <Col>
            <Card className="m-4 mx-2">
              <Card.Img variant="top" src={Image1} />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="m-4 mx-2">
              <Card.Img variant="top" src={Image2} />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="my-4 mx-2">
              <Card.Img variant="top" src={Image3} />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default LeftNav;
