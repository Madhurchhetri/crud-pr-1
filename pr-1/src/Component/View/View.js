import React, { useEffect, useState } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const View = () => {
  let api_url = "http://localhost:1000/Product";
  let [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(api_url)
      .then((res) => {
        console.log("axios res", res);
        setData(res.data);
      })
      .catch((err) => {
        console.log("axios err", err);
      });
  }, [setData, api_url]);
  return (
    <div>
      <Container>
        <Row>
          {data.map((usr) => (
            <Col key={usr.id}>
              <Card style={{ width: "18rem" }}>
              
                <Card.Body>
                  <Card.Title>{usr.pname}</Card.Title>
                  <Card.Text>
                    {usr.company}
                  </Card.Text>
                  <Link to={`detail/${usr.id}`}>
                  <Button variant="primary">Detail more</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default View;
