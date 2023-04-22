
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Row, Col } from "react-bootstrap";

const IconText = ({icon, children, color, textCLassName, size}) => {
    return (
        <Row className='d-flex align-items-center'>
            <Col xs={size} className='d-flex  justify-content-center'>
                <FontAwesomeIcon icon={icon} size={`${size}x`} color={color}/>
            </Col>
            <Col xs={ 12 - size} className={`${textCLassName} m-0`}>
                {children}
            </Col>
        </Row>
    )
};

export default IconText;