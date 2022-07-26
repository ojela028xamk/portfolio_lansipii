import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { ArrowLeft } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import "./Pages.scss";

export default function Page1(): JSX.Element {
  document.body.style.background = "#2e2e35";
  const navigate = useNavigate();
  const portfolio_1 = require("../../portfolio_1.png");

  return (
    <div className="portfolio-pages">
      <div className="portfolio-pages-header">
        <h3 className="display-3">Recipe Creator</h3>
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
                Sivusto, jossa voi luoda, muokata ja poistaa omia reseptejä.
                Tällä hetkellä reseptit tallentuvat selaimen LocalStorageen.
                Tulevaisuudessa tarkoituksena on luoda backend ja tietokanta
                tähän sivustoon. Sivusto on luotu Reactilla ja Typescriptillä.
              </p>
              <Button variant="primary" className="button">
                <a
                  href="https://ojela028xamk.github.io/recipe-creator/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Siirry sivustoon
                </a>
              </Button>
            </Col>
            <Col xs={4}>
              <Image src={portfolio_1} width="286px" />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
