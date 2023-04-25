import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

const CenteredButton = () =>  (
        <Container className='d-flex justify-content-center'>
            <Row >
                <Button className='my-5' variant='success' size='lg'>
                Abra sua conta
                </Button>
            </Row>
        </Container>

    )


export default CenteredButton;