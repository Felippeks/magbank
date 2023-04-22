import { Container, Row, Col, Image } from "react-bootstrap";

import creditCard from '../assests/credit-card.jpg'
import '../components/CreditCard.scss'

import IconText from "./IconText";
import {faCreditCard, faMobile, faShoppingCart, faWallet } from "@fortawesome/free-solid-svg-icons";

const CreditCard = () => {
    return (
        <Container>
            <Row className="my-5">
                <Col xs={12} lg={7}>
                  <Row>
                    <h2 className="my-5 credit-card-title">Cartão de crédito</h2>
                  </Row> 
                  <Row>
                    <Col xs={12} lg={6} className="mb-4">
                    <IconText icon={faCreditCard} color='#f05656' textCLassName='h5 text-muted' size={2}>Crédito Pessoal</IconText>
                        
                    </Col>
                    <Col xs={12} lg={6} className="mb-4">
                    <IconText icon={faShoppingCart} color='#f05656' textCLassName='h5 text-muted' size={2}>Pagamentos Online</IconText>
                        
                    </Col>
                    <Col xs={12} lg={6} className="mb-4">
                    <IconText icon={faMobile} color='#f05656' textCLassName='h5 text-muted' size={2}>App</IconText>
                        
                    </Col>
                    <Col xs={12} lg={6} className="mb-4">
                    <IconText icon={faWallet} color='#f05656' textCLassName='h5 text-muted' size={2}>Carteira Digital</IconText>                        
                    </Col>
                  </Row>
                </Col>
                <Col xs={12} lg={5}>
                    <Image  src={creditCard} alt='Imagem cartao de credito' fluid/>

                </Col>
            </Row>
        </Container>
    )
}

export default CreditCard;