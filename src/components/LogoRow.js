import React from 'react';
import { Row, Col } from "react-bootstrap";
import Logo from '../aeclogo.png';

const LogoRow = props => (
    <Row className='row-logo'>
        <Col>
            <img src={Logo} alt="logo" />
        </Col>
    </Row>
)

export default LogoRow;
