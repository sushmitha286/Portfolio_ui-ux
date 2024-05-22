import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiReact,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiAndroid,
  DiMysql,
  DiHtml5,
  DiPhp,
  DiCss3,
  DiEclipse,
  DiJavascript,
  DiBootstrap
  
} from "react-icons/di";
import {
  SiFirebase
} from "react-icons/si";

function Techstack() {
  return (
    
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="sentence-icons">
  <text className="icon">Research</text>
</Col>
<Col xs={4} md={2} className="sentence-icons">
  <text className="icon">Wireframing</text>
</Col>
<Col xs={4} md={2} className="sentence-icons">
  <text className="icon">Rapid Prototyping</text>
</Col>
<Col xs={4} md={2} className="sentence-icons">
  <text className="icon">Usability Testing</text>
</Col>
<Col xs={4} md={2} className="sentence-icons">
  <text className="icon">User Flows</text>
</Col>
<Col xs={4} md={2} className="sentence-icons">
  <text className="icon">Visual Design</text>
</Col><Col xs={4} md={2} className="sentence-icons">
  <text className="icon">Interaction Design</text>
</Col><Col xs={4} md={2} className="sentence-icons">
  <text className="icon">Iteration</text>
</Col>
<Col xs={4} md={2} className="sentence-icons">
  <text className="icon">User Interface (UI)</text>
</Col>
<Col xs={4} md={2} className="sentence-icons">
  <text className="icon">Iteration</text>
</Col>


      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql />
      </Col>
      
      
    </Row>
  );
}

export default Techstack;
