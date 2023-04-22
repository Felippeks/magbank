import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import { useMediaQuery } from 'react-responsive';

const CardList = ({ posts }) => {
  const isMobile = useMediaQuery({ maxWidth: 990 });
  
  return (
    <Container>
      {isMobile ? (
        <Carousel variant="dark" className="d-lg-none">
          {posts &&
            posts.map(({ id, Image, title, description, action }) => (
            <Carousel.Item key={id}>
              <Row>
                <Col xs={12} lg={4} className="mx-auto my-3">
                  <Card>
                    <Card.Img src={Image} />
                    <Card.Body>
                      <Card.Title>{title}</Card.Title>
                      <Card.Text>{description}</Card.Text>
                      <Button variant="danger">{action}</Button>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
      ) : (
        <Row>
          {posts &&
            posts.map(({ id, Image, title, description, action }) => (
            <Col xs={12} lg={4} key={id} className="mx-auto my-3">
              <Card>
                <Card.Img src={Image} />
                <Card.Body>
                  <Card.Title>{title}</Card.Title>
                  <Card.Text>{description}</Card.Text>
                  <Button variant="danger">{action}</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default CardList;
