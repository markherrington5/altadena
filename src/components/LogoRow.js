import React from 'react';
import { Row, Col } from "react-bootstrap";
import Logo from '../aeclogo.png';

const LogoRow = props => (
    <Row className='row-logo'>
        <Col>
            <img src={Logo} alt="logo" />
        </Col>
        <Col id='contact-info' md={6}>
            <p>Want to get in touch?  Email <a href="mailto: jason@altadenaeyecare.com">jason@altadenaeyecare.com</a></p>
            <p>Want to talk instead?  Call Jason at <a href="tel:+12052029607">205-202-9607</a></p>
        </Col>
    </Row>
)

export default LogoRow;
