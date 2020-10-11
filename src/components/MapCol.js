import React from 'react';
import { Row, Col } from "react-bootstrap";
import GoogleMap from './GoogleMap.js';

const MapCol = props => (
    <Col id='col-map'>
        <Row className='gmap'>
            <GoogleMap />
        </Row>
        <Row className='address'
        >
            <div>
                <h2>Location</h2>
                <ul>
                    <li>2409 Acton Road</li>
                    <li>#161</li>
                    <li>Vestavia Hills, AL 35243</li>
                </ul>
            </div>
        </Row>
    </Col>
)

export default MapCol;
