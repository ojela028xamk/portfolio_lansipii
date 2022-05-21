import { useState } from "react";
import { Button, Card, Col, Container, Modal, Row } from "react-bootstrap";
import { myProjects } from "../common/myProjects";
import { ProjectsTS } from "../interfaces/ProjectsTS";

export default function Portfolio(): JSX.Element {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalData, setModalData] = useState<ProjectsTS>();

  function handleModal(project: ProjectsTS) {
    setShowModal(true);
    setModalData(project);
  }

  return (
    <div className="bg-portfolio">
      <div className="portfolio">
        <h1 className="mb-3">Projektit</h1>
        <Container>
          <Row>
            {myProjects.map((project: ProjectsTS) => (
              <Col key={project.id} className="m-2">
                <Card bg="secondary">
                  <Card.Header as="h2" className="bg-secondary">
                    {project.title}
                  </Card.Header>
                  <Card.Img variant="top" src={project.image} />
                  <Card.Body>
                    <Button
                      variant="primary"
                      size="lg"
                      onClick={() => handleModal(project)}
                    >
                      Avaa
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header className="text-dark" closeButton>
            <Modal.Title>{modalData?.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p className="text-dark">{modalData?.description}</p>
            <p className="text-dark">
              <a
                href={modalData?.link}
                target={"_blank"}
                className="link-dark text-decoration-none"
                rel="noreferrer"
              >
                Siirry sivustoon
              </a>
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={() => setShowModal(false)}>
              Sulje
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}
