import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Button from "react-bootstrap/Button";
import staysure from "../../Assets/Projects/staysure.jpg";
import bookwise from "../../Assets/Projects/bookwise.jpg";
import healthvault from "../../Assets/Projects/healthvault.png";
import learnloop from "../../Assets/Projects/learnloop.jpg";
import cricraze from "../../Assets/Projects/cricraze.jpg";
import webuild from "../../Assets/Projects/webuild.png";
import { CgWebsite } from "react-icons/cg";
import Card from "react-bootstrap/Card";

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


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={healthvault}
              isBlog={false}
              title="Health Vault"
              description="Designed and developed a medical record keeper using the MERN Stack that leverages Scanner technology to efficiently retrieve patient's medical information."
               ghLink="https://github.com/Shashwat-451/HealthV"
              demoLink="https://master--healthvaultn.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cricraze}
              isBlog={false}
              title="Cricraze"
              description="Developed a website dedicated to cricket enthusiasts. It serves as a one-stop platform for all cricket lovers, providing them with the ability to check cricket scores, read blogs, and access information related to ICT."
              ghLink="https://github.com/Shashwat-451/CRICRAZE"
              demoLink="https://master--cricraze.netlify.app/src/pages/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={staysure}
              isBlog={false}
              title="Stay Sure"
              description="Developed the frontend for a user-friendly hotel booking website using React JS. Created a visually appealing interface with easy navigation and intuitive features. Users can search for accommodations, check availability, and make reservations."
              ghLink="https://github.com/Shashwat-451/StaySure"
              demoLink="https://staysuree.netlify.app/"
            />
          </Col>



          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bookwise}
              isBlog={false}
              title="Bookwise"
              description="Developed a model to recommend books using machine learning algorithm.Integrated the book recommendation system with the front-end of a web application,to provide personalized book recommendations to users"
              ghLink="https://github.com/Shashwat-451/BOOKWISE"

            // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={learnloop}
              isBlog={false}
              title="Learn Loop"
              description="Developed a MERN Stack website for spaced repetition learning. It utilizes the SM-2 algorithm to optimize review sessions.The goal is to provide an effective tool for enhancing learning through spaced repetition."
            // ghLink="https://github.com/soumyajit4419/Chatify"
            // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={webuild}
              isBlog={false}
              title="Construct Nex"
              description="Designed and developed all-in-one platform to streamline construction projects seamlessly. It aims to revolutionize how construction projects are planned to enhance efficiency, collaboration, and transparency throughout the construction lifecycle."
            // ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
            // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

         
        </Row>
        <Row>
        <h1 className="project-heading">
          My Coding <strong className="purple">Profiles</strong>
        </h1>
        <Col md={4} className="project-card">
          <Card className="project-card-view codingprofile">
      {/* <Card.Img variant="top" src={props.imgPath} alt="card-img" /> */}
      <Card.Body>
        <Card.Title>Leetcode</Card.Title>
        {/* <Card.Text style={{ textAlign: "center" }}>
          {props.description}
        </Card.Text> */}
        <Button
            variant="primary"
            href="https://leetcode.com/Shashwat45/"
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Explore"}
          </Button>
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        
      </Card.Body>
    </Card>
    </Col>
    <Col md={4} className="project-card">
    <Card className="project-card-view codingprofile">
      {/* <Card.Img variant="top" src={props.imgPath} alt="card-img" /> */}
      <Card.Body>
        <Card.Title>GFG</Card.Title>
        {/* <Card.Text style={{ textAlign: "center" }}>
          {props.description}
        </Card.Text> */}
        <Button
            variant="primary"
            href="https://www.geeksforgeeks.org/user/shashwat45/?utm_source=geeksforgeeks&utm_medium=my_profile&utm_campaign=auth_user"
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Explore"}
          </Button>
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        
      </Card.Body>
    </Card>
    </Col>
    <Col md={4} className="project-card">
    <Card className="project-card-view  codingprofile">
      {/* <Card.Img variant="top" src={props.imgPath} alt="card-img" /> */}
      <Card.Body>
        <Card.Title>Coding Ninjas</Card.Title>
        {/* <Card.Text style={{ textAlign: "center" }}>
          {props.description}
        </Card.Text> */}
        <Button
            variant="primary"
            href="https://www.naukri.com/code360/profile/1a163841-2408-44cc-91c5-9c938f87cdf8"
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Explore"}
          </Button>
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        
      </Card.Body>
    </Card>
 </Col>
    </Row>
      </Container>
    </Container>
  );
}

export default Projects;
