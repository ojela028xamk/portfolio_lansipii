import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { ArrowLeft } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import "./Pages.scss";

export default function Page2(): JSX.Element {
  document.body.style.background = "#2e2e35";
  const navigate = useNavigate();
  const portfolio_2 = require("../../portfolio_2.png");

  return (
    <div className="portfolio-pages">
      <div className="portfolio-pages-header">
        <h3 className="display-3">ReactJS ohjelmia</h3>
      </div>
      <div className="portfolio-pages-content">
        <Container>
          <Row>
            <Col xs={8}>
              <Button
                variant="primary"
                className="button"
                onClick={() => navigate("/")}
              >
                <ArrowLeft className="button-icon" />
                Palaa takaisin
              </Button>
              <p>
                Sivusto, josta löytyy kaikki ReactJS-kirjaston avulla luodut
                ohjelmat, jotka olen tehnyt tähän mennessä.
              </p>
              <p>
                <ul>
                  <li>Sivusto, joka näyttää rokotedataa.</li>
                  <li>Toivelista videopeleille.</li>
                  <li>Budjettilaskuri</li>
                  <li>
                    Uutissivusto, joka kerää uutisia erilaisten uutissivustojen
                    RSS-fiideistä.
                  </li>
                </ul>
              </p>
              <p>
                Uutissivustolta löytyy backend, joka on luotu Node.js
                tekniikalla. Toivelistan ja budjettilaskurin tiedot tallentuvat
                LocalStorage-tekniikalla selaimellesi. Tämä sivusto löytyy
                Googlen Firebase-alustalta.
              </p>
              <Button variant="primary" className="button">
                <a
                  href="https://react-projects-3265b.firebaseapp.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Siirry sivustoon
                </a>
              </Button>
            </Col>
            <Col xs={4}>
              <Image src={portfolio_2} width="286px" />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
