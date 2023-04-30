import { Col, Container, Image, Row } from "react-bootstrap";

import logo from "../assests/MAGbank.png";
import apple from "../assests/applestore.png";
import google from "../assests/googleplay.png";

import {
  faFacebookSquare,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Footer.scss";

const Footer = () => {
  

  return (
    <footer className="footer">
      <Container>
        <Row className="text-center py-5">
          <Col xs={12} lg={6} className="text-lg-start">
            <Image src={logo} Image />
          </Col>
          <Col xs={12} lg={4} >
           <a href="https://www.apple.com/br/store" target="_blank" rel="noreferrer" ><Image src={apple} /></a> 
           <a href="https://play.google.com/store" target="_blank" rel="noreferrer"><Image src={google} className="ms-3 my-3 my-lg-0" /></a> 
          </Col>
          <Col xs={12} lg={2}>
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
              <FontAwesomeIcon
                icon={faFacebookSquare}
                color="#7c7c7c"
                size="2x"
                
              />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
              <FontAwesomeIcon
                icon={faTwitter}
                color="#7c7c7c"
                size="2x"
                className="ms-2"
              />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
              <FontAwesomeIcon
                icon={faYoutube}
                color="#7c7c7c"
                size="2x"
                className="ms-2"
              />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
