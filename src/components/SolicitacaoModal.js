import { Button, Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

const PecaModal = ({ show, handClose }) => {
  return (
    <Modal show={show} onHide={() => handClose()}>
      <Modal.Header closeButton>
        <Modal.Title>Peça já</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Seu Nome</Form.Label>
            <Form.Control type="text" placeholder="Digite seu Nome" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Seu Email</Form.Label>
            <Form.Control type="email" placeholder="Digite seu Email" />
          </Form.Group>
         </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secundary" onClick={() => handClose()}>Cancelar</Button>
        <Button variant="primary" onClick={() => handClose()}>Solicitar</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PecaModal;
