import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

const CenteredButton = () =>  (
        <Container>
            <Row sm={5} className='d-flex justify-content-center' >
                <Button className='my-5 px-5 py-3' variant='success' size='lg'>
                Abra sua conta
                </Button>
            </Row>
        </Container>

    )


export default CenteredButton;