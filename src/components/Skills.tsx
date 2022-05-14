import { Col, Container, Row } from "react-bootstrap";
import { Pen, CodeSlash, PcDisplay } from "react-bootstrap-icons";

export default function Skills(): JSX.Element {
  return (
    <div className="bg-skills">
      <div className="skills">
        <h1>Minun osaaminen</h1>
        <p>
          Osaamista löytyy graafisesta suunnittelusta, käyttöliittymä- ja
          käyttökokemussuunnittelusta ja ohjelmoinnista.
        </p>
        <Container>
          <Row>
            <Col className="skills-card">
              <Pen size={50} color="var(--primary)" />
              <h2 className="mt-3">Adobe</h2>
              <p>
                Photoshop, Illustrator ja InDesign. Osaan myös jonkin verran
                käyttää Premiere Prota.
              </p>
            </Col>
            <Col className="skills-card">
              <CodeSlash size={50} color="var(--primary)" />
              <h2 className="mt-3">Ohjelmointi</h2>
              <p>
                HTML/CSS/JS. Osaamista löytyy myös ReactJS ja hieman Node.js,
                kuten myös responsiivisesta suunnittelusta.
              </p>
            </Col>
            <Col className="skills-card">
              <PcDisplay size={50} color="var(--primary)" />
              <h2 className="mt-3">Muuta</h2>
              <p>
                Office-ohjelmat ja kymmensormijärjestelmä. Osaamista löytyy myös
                tietokoneiden kasaamisesta ja komponenttien vaihdosta.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
