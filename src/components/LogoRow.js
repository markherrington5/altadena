import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Logo from '../aeclogo.png';

const LogoRow = props => (
    <Row className='row-logo'>
        <Col>
            <img src={Logo} />
        </Col>
    </Row>
)

export default LogoRow;
