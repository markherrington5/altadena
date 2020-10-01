import React from 'react';
import { Row, Col } from "react-bootstrap";
import Portrait from '../portrait.jpg';

const BioRow = props => (
    <Row className='info-row row-bio'>
        <Col md={3} className='image'>
            <div className='frame'>
                <img src={Portrait} alt='portrait' />
            </div>
        </Col>
        <Col md={9} className='description'>
            <div>
                <h2>Dr. Amy Herrington</h2>
                <p>fdsafdas</p>
                <p>fdsafdas</p>
                <p>fdsafdas</p>
                <p>fdsafdas</p>
                <p>fdsafdas</p>
            </div>
        </Col>
    </Row>
)

export default BioRow;
