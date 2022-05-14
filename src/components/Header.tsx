import { Button, Col, Container, Image, Nav, Row } from "react-bootstrap";
import "./Components.scss";

export default function Header(): JSX.Element {
  const avatar = require("../avatar.jpg");
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
                  <Nav.Link href="" target={"_blank"}>
                    GitHub
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="" target={"_blank"}>
                    Facebook
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="" target={"_blank"}>
                    LinkedIn
                  </Nav.Link>
                </Nav.Item>
              </Nav>
              <Button variant="outline-primary" size="lg">
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
