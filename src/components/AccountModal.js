import { Button, Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

const AccountModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={() => handleClose()}>
      <Modal.Header closeButton>
        <Modal.Title>Abra sua conta</Modal.Title>
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
          <Form.Group>
            <Form.Label>Sua Cidade</Form.Label>
            <Form.Select>
              <option value="0">São Paulo - SP</option>
              <option value="1">Curitiba - PR</option>
              <option value="2">Florianópolis - SC</option>
              <option value="3">Rio de Janeiro - RJ</option>
              <option value ="4">Porto Alegre - RS</option>
            </Form.Select>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secundary" onClick={() => handleClose()}>Cancelar</Button>
        <Button variant="primary" onClick={() => handleClose()}>Criar conta</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AccountModal;
