import React from "react";
import { Container, Row } from "react-bootstrap";
import LogoRow from "../components/LogoRow.js";
import AboutCol from "../components/AboutCol.js";
import MapCol from "../components/MapCol.js";
import BioRow from "../components/BioRow.js";


function Home() {

  return (
    <Container>
      <LogoRow />
      <Row className='info-row'>
        <AboutCol />
        <MapCol />
      </Row>
      <BioRow />
      <p id='copyright'>v0.0.1 | © 2020 Mark Herrington</p>
    </Container>
  )
}

export default Home;
