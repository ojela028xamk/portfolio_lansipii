import { Button, Card, Col, Container, Row } from "react-bootstrap";
import CardModal from "../common/CardModal";
import { myProjects } from "../common/myProjects";

export default function Portfolio(): JSX.Element {
  return (
    <div className="bg-portfolio">
      <div className="portfolio">
        <h1>Minun projektit</h1>
        <Container>
          <Row>
            {myProjects.map((project) => (
              <Col>
                <Card>
                  <Card.Img variant="top" src="holder.js/100px180" />
                  <Card.Body>
                    <Button variant="primary">Avaa</Button>
                  </Card.Body>
                </Card>
                <CardModal project={project} />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
}
