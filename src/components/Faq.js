import React from "react";
import {
  Container,
  Row,
  Col,
  Accordion,
  Card,
  useAccordionButton,
} from "react-bootstrap";
import IconText from "./IconText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faCreditCard,
  faWallet,
  faShieldAlt,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";

import "./Faq.scss";

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log("totally custom!")
  );

  return (
    <button
      className="button"
      type="button"
      // style={{ backgroundColor: "#3b2e4a", color:"white"}}
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}

const Faq = () => {
  return (
    <section className="faq text-light">
      <Container className="py-5">
     <card className="d-flex justify-content-center">
     <h2 className="title my-5 ">Dúvidas frequentes</h2>
     </card>     
        <Row className="d-flex align-items-center justify-items-center">
          <Col className="d-lg-none mb-5" xs={12}>
            <Row>
              <Col className="d-flex  justify-content-center">
                <FontAwesomeIcon icon={faCreditCard} size="2x" />
              </Col>
              <Col className="d-flex  justify-content-center">
                <FontAwesomeIcon icon={faWallet} size="2x" />
              </Col>
              <Col className="d-flex  justify-content-center">
                <FontAwesomeIcon icon={faShieldAlt} size="2x" />
              </Col>
              <Col className="d-flex  justify-content-center">
                <FontAwesomeIcon icon={faUserTie} size="2x" />
              </Col>
            </Row>
          </Col>
          <Col className="d-none d-lg-block">
            <IconText icon={faCreditCard} size={3} textCLassName="lead">
              Cartão de crédito e débito
            </IconText>
            <IconText icon={faWallet} size={3} textCLassName="lead">
              Conta e abertura
            </IconText>
            <IconText icon={faShieldAlt} size={3} textCLassName="lead">
              Token digital
            </IconText>
            <IconText icon={faUserTie} size={3} textCLassName="lead">
              Produtos e serviços
            </IconText>
          </Col>
          <Col>
            <Accordion defaultActiveKey="0">
              <Card className="faq__card">
                <Card.Header className="card_header">
                  <CustomToggle eventKey="0"> Lorem ipsum dolor sit amet</CustomToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.</Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card className="faq__card">
                <Card.Header className="card_header">
                  <CustomToggle eventKey="1">Nulla porttitor eros ac ex tristique posuere</CustomToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.</Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card className="faq__card">
                <Card.Header className="card_header">
                  <CustomToggle eventKey="2">Quisque fringilla tincidunt arcu</CustomToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                  <Card.Body>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.</Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card className="faq__card">
                <Card.Header className="card_header"  >
                  <CustomToggle eventKey="3">Nam elementum lobortis purus a maximus tortor</CustomToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="3">
                  <Card.Body>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.</Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Faq;
