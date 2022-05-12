import { Button, Col, Container, Nav, Row } from "react-bootstrap";
import "./App.scss";

function App() {
  return (
    <div className="background-header">
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
              <Button variant="outline-primary">Minun CV</Button>
            </Col>
            <Col sm={4}>KUVA</Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default App;
