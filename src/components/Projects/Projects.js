import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import PlanArc from "../../Assets/Projects/PlanArc.png";

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
              // imgPath={ScoreBuzz}
              isBlog={false}
              title="ScoreBuzz"
              description="A Web page that will display the scores of all the crickets that were used to play all over the world. It shows all tournament like IPL and all the internatiolan games, this web page is created using React Js, Node js and some of the CSS libirary like bootstrap and tailwind CSS.  "
              ghLink="https://github.com/saurabhmishra2001/Cricket_App"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={PlanArc}
              isBlog={false}
              title="PlanArc"
              description="PlanArc is your all-in-one platform designed to streamline the planning and organization of learning, personal projects, and more. With a focus on structure and simplicity, PlanArc helps users map out their learning journeys, set clear goals, and track progress effectively. Whether you’re a student, a professional, or just looking to organize your day-to-day tasks, PlanArc empowers you to manage your time, prioritize tasks, and achieve your goals with ease. Start planning smarter and take control of your learning and productivity with PlanArc.  "
              ghLink="https://github.com/saurabhmishra2001/PlanArc"
              demoLink="https://plan-arc-three.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
