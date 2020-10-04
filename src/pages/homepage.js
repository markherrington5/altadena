import React from "react";
import { Container } from "react-bootstrap";
import LogoRow from "../components/LogoRow.js";
import AboutRow from "../components/AboutRow.js";
import MapRow from "../components/MapRow.js";
import BioRow from "../components/BioRow.js";


function Home() {

  return (
    <Container>
      <LogoRow />
      <AboutRow />
      <MapRow />
      <BioRow />
      <p id='copyright'>v0.0.1 | © 2020 Mark Herrington</p>
    </Container>
  )
}

export default Home;
