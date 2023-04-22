import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Button from "react-bootstrap/esm/Button";

const CenteredButton = () =>  (
        <Container>
            <Row className="d-flex justify-content-center">
                <Button className="my-5 px-5 py-3" variant="success" size="lg">
                    Abra sua conta
                </Button>
            </Row>
        </Container>

    )


export default CenteredButton;