import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { ArrowLeft } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import "./Pages.scss";

export default function Page3(): JSX.Element {
  document.body.style.background = "#2e2e35";
  const navigate = useNavigate();
  const portfolio_3 = require("../../portfolio_3.png");

  return (
    <div className="portfolio-pages">
      <div className="portfolio-pages-header">
        <h3 className="display-3">Somepassi</h3>
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
                Sivusto, joka on osa tradenomikoulutuksen opinnäytetyötä. Tämä
                tietovisatyyppinen sovellus on osa Digivoimaa-hanketta, jonka
                tarkoitus on vahvistaa syrjäytymisvaarassa olevien nuorten
                digitaalista hyvinvointia.
              </p>
              <p>
                Ohjelmointi on tehty puhtaasti HTLM-, CSS- ja Javascript-
                kielillä. Tämä sivusto on myös responsiivinen tabletilla ja
                kännykällä. Tein myös Digivoimaa-hankkeelle omat kotisivut, joka
                on luotu Wordpressin ilmaisversiolla.
              </p>
              <p>Tämä sivusto löytyy Heroku-alustalta.</p>
              <Button variant="primary" className="button">
                <a
                  href="https://somepassi.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Somepassi
                </a>
              </Button>
              <Button variant="primary" className="button">
                <a
                  href="https://digivoimaahanke.wordpress.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Digivoimaa
                </a>
              </Button>
              <Button variant="primary" className="button">
                <a
                  href="https://www.theseus.fi/handle/10024/497497"
                  target="_blank"
                  rel="noreferrer"
                >
                  Opinnäytetyö {"(Theseus)"}
                </a>
              </Button>
            </Col>
            <Col xs={4}>
              <Image src={portfolio_3} width="286px" />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
