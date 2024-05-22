// import React from "react";
// import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";
// import { CgFigma, CgWebsite } from "react-icons/cg";
// import { BsGithub } from "react-icons/bs";

// function ProjectCards(props) {
//   return (
//     <Card className="project-card-view">
//       <Card.Img variant="top" src={props.imgPath} alt="card-img" />
//       <Card.Body>
//         <Card.Title>{props.title}</Card.Title>
//         <Card.Text style={{ textAlign: "justify" }}>
//           {props.description}
//         </Card.Text>
//         <Button variant="primary" href={props.ghLink} target="_blank">
//           <BsGithub /> &nbsp;
//           {props.isBlog ? "Blog" : "Github"}
//         </Button>
        
        
       
//         {"\n"}
//         {"\n"}

//         {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

//         {!props.isBlog && props.demoLink && (
//           <Button
//             variant="primary"
//             href={props.demoLink}
//             target="_blank"
//             style={{ marginLeft: "10px" }}
//           >
//             <CgWebsite /> &nbsp;
//             {"Demo"}
//           </Button>
//         )}
//       </Card.Body>
//     </Card>
//   );
// }
// export default ProjectCards;


import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgFigma, CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

// Optional: Import a styling library for customization (e.g., styled-components)
// import styled from 'styled-components';

function ProjectCards(props) {
  const getButtonIcon = () => {
    if (props.figmaLink) {
      return <CgFigma />; // Use Figma icon if figmaLink is provided
    } else if (props.isBlog) {
      return null; // Don't show an icon for blogs
    } else {
      return <BsGithub />; // Default to Github icon
    }
  };

  const getButtonText = () => {
    return props.buttonText || (props.isBlog ? "Blog" : (props.figmaLink ? "Figma" : "Github"));
  };

  // Optional: Apply custom styles using a styling library
  // const StyledButton = styled(Button)`
  //   background-color: ${props.isBlog ? '#fff' : '#411B17'}; // Example styling
  // `;

  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button
          variant="primary"
          href={props.isBlog ? "" : (props.figmaLink || props.ghLink)}
          target="_blank"
        >
          {getButtonIcon()} &nbsp;
          {getButtonText()}
        </Button>
        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            Demo
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
