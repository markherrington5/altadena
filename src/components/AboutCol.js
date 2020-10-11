import React from 'react';
import { Col } from "react-bootstrap";

const AboutCol = props => (
    <Col id='col-about'>
        <h2>Opening late fall 2020!</h2>
        <h1>Welcome to Altadena Eye Care!</h1>
        <p>Dr. Amy Herrington, with more than thirty years experience caring for her patients' ocular health, is happy to announce the opening of the Birmingham area's newest eye care practice and optical boutique near the intersection of I-459 and Acton Road in Vestavia Hills.</p>
        <ul>
            <li>Whether you are 4 or 104, we provide comprehensive eye care in a relaxed and friendly environment. Diabetic eye evaluations and dry eye treatment are available.</li>
            <li>With a wealth of knowledge evaluating patients for contact lenses, Dr. Amy Herrington can identify the most optically advanced contact lenses for your lifestyle and visual needs.</li>
            <li>In Altadena Eye Care's optical boutique, you will find eyeglass frames from hand-crafted and high-end designers and accessible and affordable essentials -  all curated with your personal style and visual needs in mind.</li>
            <li>With twenty years of experience guiding patients through the process of selecting eyewear and lenses, our expert Jason Martin has chosen a wide range of eyewear styles at varying price-points for our collection. He can introduce you to eyeglass frames and the most accurate lenses to provide you the best visual correction in the most aesthetically pleasing styles.</li>
        </ul>
        <div className='details-box'>
            <p>Please email or call us to schedule an appointment. We would love to answer any questions you have about our practice. Dr. Herrington will begin seeing patients for routine and specialty care in late November or early December 2020, so call us soon!</p>
        </div>
        <p id='insurance'>We accept most major medical insurances and vision insurances VSP and Eyemed.</p>
    </Col>
)

export default AboutCol;
