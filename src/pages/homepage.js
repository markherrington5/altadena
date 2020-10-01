import React from "react";
import { Container } from "react-bootstrap";
import LogoRow from "../components/LogoRow.js";
import MapRow from "../components/MapRow.js";
import BioRow from "../components/BioRow.js";


function Home() {

  return (
    <Container>
      <LogoRow />
      <BioRow />
      <MapRow />
      <p id='copyright'>v0.0.1 | © 2020 Mark Herrington</p>
    </Container>
  )
}

export default Home;
