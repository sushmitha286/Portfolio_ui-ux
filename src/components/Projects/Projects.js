import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/web app.png";
import Ezkart from "../../Assets/Projects/Ezkart.png";
import water from "../../Assets/Projects/Extract z.png";
import sosit from "../../Assets/Projects/sos-it.png";
import train from "../../Assets/Projects/train.png";
import blood from "../../Assets/Projects/blood.png";
import fullstack from "../../Assets/Projects/FS.png"



function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sosit}
              isBlog={false}
              title="SOS-IT"
              description="Introducing our innovative app with dual functionality. In 'Customer Mode,' users can place orders for doorstep delivery, while 'Agent Mode' enables individuals to accept orders within their travel radius. This platform empowers students, job seekers, and those seeking extra income to efficiently deliver orders while on the go. Join us for a convenient and profitable experience."
              ghLink="https://github.com/sushmitha286/SOS-IT" 
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blood}
              isBlog={false}
              title="Blood Track"
              description="Experience the power of our Blood Bank Management System, offering administrators seamless control over user access, donor records, and vital inventory data. With comprehensive categorization of different blood groups, it ensures a ready supply for every need. Detailed receiver information capture allows for precise donor matching, and efficient blood request management ensures timely responses. Elevate your blood bank's operations with our all-inclusive solution"
              ghLink="https://github.com/sushmitha286/Blood-bank-management-system"
              
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={water}
              isBlog={false}
              title="Hydro Remainder"
              description="HydroReminder is a fantastic app designed to prioritize your health. For those with busy lives, it's the perfect solution to ensure you stay adequately hydrated. This app serves as your water tracker and timely reminder, calculating your daily water intake based on your gender and weight. It also offers a convenient water consumption history tracker and rewards achievements as you meet your daily hydration goals."
              ghLink="https://github.com/sushmitha286/Hydro_Remainder"
                         
            />
          </Col> */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Generic approach toplant leaf disease classification and verification"
              description="Revolutionizing plant disease detection with VGG19, Inception V3, and Inception ResNet v2 models, achieving an impressive 93% accuracy. Our comprehensive approach combines physical plant analysis and crop disease data for robust classification and verification."
              ghLink="https://github.com/sushmitha286/A-Generic-Approach-to-Plant-leaf-diseases-Classification-and-Verification"
              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Ezkart}
              isBlog={false}
              title="Ezkart Case Study"
              description="Ezkart's design offers a convenient and efficient grocery shopping experience. Their focus on women's empowerment adds a social impact dimension to their business model. While the success of this approach requires further data, Ezkart has the potential to disrupt the traditional grocery market by combining social responsibility with innovative design."
              figmaLink="https://www.figma.com/proto/EVaRU9EwaIq0gtsaD20738/Ezkart-case-study?page-id=0%3A1&node-id=1-383&viewport=424%2C511%2C0.17&t=OkTA6eZofX6RDddn-1&scaling=min-zoom"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={water}
              isBlog={false}
              title="Extract-Z Case Study"
              description="ExtractZ is an innovative solution reshaping document management through autonomous tagging, advancing NLP initiatives, and ensuring data privacy. With features like text classification, entity extraction, and a precise search engine, ExtractZ streamlines processes, showcased through case studies that highlight its impact on contract management and trade finance optimization."
              figmaLink="https://www.figma.com/proto/IqloRyfiC17vSHIT3vGSWm/extract-z-case-study?page-id=0%3A1&node-id=0-8&viewport=579%2C342%2C0.12&t=sRFJmE1QwJdCaF63-1&scaling=min-zoom"
              
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={train}
              isBlog={false}
              title="Railway ticket hub"
              description="Created an end-to-end train ticketing solution, simplifying booking, seat reservations, and seamless payment processing. Crafted intuitive user interfaces for web and mobile, prioritizing accessibility. Seamlessly integrated live data feeds for precise scheduling information, optimizing the passenger experience."
              ghLink="https://github.com/sushmitha286/Train-ticketing-system"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cinema}
              isBlog={false}
              title="Light camera movie"
              description="Light camera movie is a robust and user-friendly movie database management system that encompasses essential features like secure user login and signup, seamless movie and theatre browsing, interactive seat selection, secure payment processing, and convenient ticket printing. Additionally, the platform offers a 'Contact us' section for user inquiries, ensuring a comprehensive movie-watching experience."
              ghLink="https://github.com/sushmitha286/Movie-Database-Management-System"
              
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fullstack}
              isBlog={false}
              title="Full Stack Project"
              description="I've developed a dynamic full-stack project showcasing my web development skills. The backend is powered by Node.js and Express.js, while the frontend utilizes HTML, CSS, Bootstrap, and React.js, resulting in a robust and responsive web application."
              ghLink="https://github.com/sushmitha286/FullStack"  
            />
          </Col>*/ }
          
        
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
