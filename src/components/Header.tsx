import { Button, Col, Container, Image, Nav, Row } from "react-bootstrap";
import { Github, Linkedin } from "react-bootstrap-icons";
import "./Components.scss";

export default function Header(): JSX.Element {
  const avatar = require("../avatar.png");
  return (
    <div className="bg-header">
      <div className="header">
        <Container>
          <Row>
            <Col sm={8}>
              <h2>Graafinen suunnittelija ja koodari</h2>
              <h1>Jere Länsipii</h1>
              <p>
                Hei, olen juuri valmistunut tradenomi, tietojenkäsittelyn
                linjalta ja asustelen Mikkelissä. Opintojen tiimoilta osaamista
                löytyy graafisesta suunnittelusta, käyttöliittymä- ja
                käyttökokemussuunnittelusta ja ohjelmoinnista. Ennen opiskeluja
                minulta löytyy yli kolme vuotta työkokemusta.
              </p>
              <Nav>
                <Nav.Item>
                  <Nav.Link
                    href="https://github.com/ojela028xamk"
                    target={"_blank"}
                  >
                    <Github className="m-2" />
                    <span className="align-middle">Github</span>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    href="https://www.linkedin.com/in/jere-l%C3%A4nsipii-60b1a3217/"
                    target={"_blank"}
                  >
                    <Linkedin className="m-2" />
                    <span className="align-middle">LinkedIn</span>
                  </Nav.Link>
                </Nav.Item>
              </Nav>
              <Button variant="outline-primary" size="lg" className="mt-3">
                Minun CV
              </Button>
            </Col>
            <Col sm={4}>
              <Image src={avatar} roundedCircle={true} />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
