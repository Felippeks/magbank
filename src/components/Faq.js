import React, { useEffect, useState } from "react";

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
    <button className="button" type="button" onClick={decoratedOnClick}>
      {children}
    </button>
  );
}

const Faq = () => {
  const options = [
    { icon: faCreditCard, text: "Cartão de crédito e débito" },
    { icon: faWallet, text: "Conta e abertura" },
    { icon: faShieldAlt, text: "Token digital" },
    { icon: faUserTie, text: "Produtos e serviços" },
  ];

  const [index, setIndex] = useState(0);

  const handleClick = (key) => {
    setIndex(key);
  };

  useEffect(() => {
    console.log(index);
  }, [index]);

  return (
    <section className="faq text-light">
      <Container className="py-5">
        <card className="d-flex justify-content-center">
          <h2 className="title my-5 ">Dúvidas frequentes</h2>
        </card>
        <Row className="d-flex align-items-center justify-items-center">
          <Col className="d-lg-none mb-5" xs={12}>
            <Row>
              {options.map(({ icon }, key) => (
                <Col className="d-flex  justify-content-center" key={key}>
                  <FontAwesomeIcon
                    icon={icon}
                    size="2x"
                    color={key === index ? '#fff' : '#BBB'}
                    onClick={() => handleClick(key)}
                  />
                </Col>
              ))}
            </Row>
            <Row className="text_icon pt-5">
            <p className="lead">{options[index].text}</p>
            </Row>
          </Col>
          <Col className="d-none d-lg-block">
            {options.map(({ icon, text }, key) => (
              <IconText
                icon={icon}
                size={3}
                className='faq-icon-text mb-3'
                textCLassName="lead"
                color={key === index ? '#fff' : '#BBB'}
                onClick={() => handleClick(key)}
                key={key}
              >
                {text}
              </IconText>
            ))}
          </Col>
          <Col>
            <Accordion defaultActiveKey='0' activeKey={`${index}`}>
              <Card className="card_header faq__card p-3">
                <CustomToggle as={Card.Header} eventKey="0">
                  Lorem ipsum dolor sit amet
                </CustomToggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body className="card_body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card className="card_header faq__card p-3">
                <CustomToggle as={Card.Header} eventKey="1">
                  Nulla porttitor eros ac ex tristique posuere
                </CustomToggle>
                <Accordion.Collapse eventKey="1">
                  <Card.Body className="card_body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card className="card_header faq__card p-3">
                <CustomToggle as={Card.Header} eventKey="2">
                  Quisque fringilla tincidunt arcu
                </CustomToggle>
                <Accordion.Collapse eventKey="2">
                  <Card.Body className="card_body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card className="card_header faq__card p-3">
                <CustomToggle as={Card.Header} eventKey="3">
                  Nam elementum lobortis purus a maximus tortor
                </CustomToggle>
                <Accordion.Collapse eventKey="3">
                  <Card.Body className="card_body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Card.Body>
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
