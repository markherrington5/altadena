import React from 'react';
import { Row, Col } from "react-bootstrap";
import GoogleMap from './GoogleMap.js';

const MapRow = props => (
    <Row className='info-row row-map'>
        <Col className='address' md={7}>
            <div>
                <h2>Location</h2>
                <ul>
                    <li>2409 Acton Road</li>
                    <li>#161</li>
                    <li>Vestavia Hills, AL 35243</li>
                </ul>
            </div>
        </Col>
        <Col md={5} className='gmap'>
            <GoogleMap />
        </Col>
    </Row>
)

export default MapRow;
