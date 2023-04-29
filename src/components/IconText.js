
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Row, Col } from "react-bootstrap";

const IconText = ({icon, children, color, textCLassName, size, onClick, className}) => {
    return (
        <Row className={`d-flex align-items-center mb-3 ${className}`} onClick={() => onClick()}>
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