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
                <p>Originally from Charleston, SC, Dr Amy Herrington graduated from Furman University in 1985. She moved to Birmingham to attend the University of Alabama Birmingham School of Optometry. Upon graduation in 1989, she accepted a position with Schaeffer Eye Center and remained with the practice after it was acquired by MyEyeDr in 2017.</p>
                <p>Dr Herrington is married to Bruce Herrington, founder and president of the architecture firm LineScaleForm. For over twenty years, they have been residents of Vestavia HIlls. They have two grown children, both graduates of Vestavia Hills High School. Rachel is a graduate of the University of Alabama with a degree in nursing and UAB with a nurse practitioner degree. She is married to Captain Joshua Mote, USAF and lives in Ramstein, Germany. Mark is a Rhodes college graduate and is employed by Emory University as a web developer.
The Herringtons are members of Briarwood Presbyterian Church where she has served on the Women's Ministries and Briarwood Fellows boards and with the Global Ministries Team. She enjoys working outdoors and long walks with her Boykin spaniel Zeke.</p>
            </div>
        </Col>
    </Row>
)

export default BioRow;
