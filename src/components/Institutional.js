import { Container, Col, Row, Button } from "react-bootstrap";
import "./Institutional.scss";
import IconText from './IconText'
import {
    faGlobe,
    faMobile,
    faMobileAlt,
    faShieldAlt,    
  } from "@fortawesome/free-solid-svg-icons";

const Institutional = () => {
  return (
    <section className="institutional text-light py-5">
      <Container>
        <Row>
          <Col xs={12} lg={5} />
          <Col xs={12} lg={7}>
            <h2 className='institutional-title my-5'>Já nascemos digital</h2>
            <p className='mb-5'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>

            <Row>
            <Col xs={12} lg={6} className="mb-4">
            <IconText
              icon={faMobileAlt}
              size={2}
              color="#FFF"
              textClassName="h5 text-muted"
            >
              Sem fila e sem burocracia
            </IconText>
          </Col>
            </Row>
            <Row>
            <Col xs={12} lg={6} className="mb-4">
            <IconText
              icon={faMobile}
              size={2}
              color="#FFF"
              textClassName="h5 text-muted"
            >
              Simples e pratico
            </IconText>
          </Col>
            </Row>
            <Row>
            <Col xs={12} lg={6} className="mb-4">
            <IconText
              icon={faGlobe}
              size={2}
              color="#FFF"
              textClassName="h5 text-muted"
            >
              Abertura de conta 100% online
            </IconText>
          </Col>
            </Row>
            <Row>
            <Col xs={12} lg={6} className="mb-4">
            <IconText
              icon={faShieldAlt}
              size={2}
              color="#FFF"
              textClassName="h5 text-muted"
            >
              Transações mais seguras
            </IconText>
          </Col>
            </Row>
            <Button variant='outline-light' className='mt-5'>
                Abra sua conta
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Institutional;
