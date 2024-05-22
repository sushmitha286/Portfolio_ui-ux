import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiGithub } from "react-icons/di";
import {
  SiAdobephotoshop,
  SiAdobexd,
  SiAndroid,
    SiFigma,
    SiPycharm,
  SiVirtualbox,
  SiVisualstudio,
  SiWindows,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiFigma/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobexd/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobephotoshop/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudio />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiWindows />
      </Col>
   
      
    </Row>
  );
}

export default Toolstack;
