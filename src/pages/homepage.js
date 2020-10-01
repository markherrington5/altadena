import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LogoRow from "../components/LogoRow.js";
import MapRow from "../components/MapRow.js";


function Home() {

  return (
    <Container>
      <LogoRow />
      <MapRow />
    </Container>
  )
}

export default Home;
