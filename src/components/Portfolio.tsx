import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Components.scss";

export default function Portfolio(): JSX.Element {
  const navigate = useNavigate();
  const page1_img = require("../portfolio_1.png");
  const page2_img = require("../portfolio_2.png");
  const page3_img = require("../portfolio_3.png");

  return (
    <div className="bg-dark">
      <div className="portfolio">
        <h1 className="mb-3">Projektit</h1>
        <p>
          Alta löytyy erilaisia projekteja, joita olen tehnyt. Tulevaisuudessa
          on tarkoitus luoda sivusto, johon tulee kaikki Full Stack -projektit.
          Teknologioina ReactJS, NodeJS ja todennäköisesti MySQL.
        </p>
        <Container>
          <Row>
            <Col className="m-2">
              <Card bg="secondary">
                <Card.Header as="h2" className="bg-secondary">
                  Recipe Creator
                </Card.Header>
                <Card.Img variant="top" src={page1_img} />
                <Card.Body>
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={() => navigate("/page1")}
                  >
                    Avaa
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col className="m-2">
              <Card bg="secondary">
                <Card.Header as="h2" className="bg-secondary">
                  ReactJS Ohjelmia
                </Card.Header>
                <Card.Img variant="top" src={page2_img} />
                <Card.Body>
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={() => navigate("/page2")}
                  >
                    Avaa
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col className="m-2">
              <Card bg="secondary">
                <Card.Header as="h2" className="bg-secondary">
                  Somepassi
                </Card.Header>
                <Card.Img variant="top" src={page3_img} />
                <Card.Body>
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={() => navigate("/page3")}
                  >
                    Avaa
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
