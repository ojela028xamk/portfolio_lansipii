import { Col, Container, Row } from "react-bootstrap";
import { Discord, Envelope, TelephoneFill } from "react-bootstrap-icons";

export default function Footer(): JSX.Element {
  return (
    <div className="bg-footer">
      <div className="footer">
        <h1>Ota yhteyttä</h1>
        <Container>
          <Row>
            <Col className="footer-card">
              <Envelope className="m-2" />
              <span>jerelans91@gmail.com</span>
            </Col>
            <Col className="footer-card">
              <TelephoneFill className="m-2" />
              <span>+358407729448</span>
            </Col>
            <Col className="footer-card">
              <Discord className="m-2" />
              <span>Jerize#4796</span>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="copyright">
        Copyright <span>&copy;</span> Jere Länsipii | All rights reserved
      </div>
    </div>
  );
}
