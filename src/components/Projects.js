import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import projImg7 from "../assets/img/project-img7.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const reactProjects = [
    {
      title: "Resume Builder Application",
      description:
        "Create both class & function components, utilise props, state, and hooks",
      imgUrl: projImg1,
      repoUrl: "https://github.com/JayRichh/cv-project",
      liveUrl: "https://jayrichh.github.io/cv-project/",
    },
    {
      title: "Memory Card Game (Work In Progress)",
      description:
        "Along with components, utilise props, state, and hooks to create a memory card game",
      imgUrl: projImg7,
      repoUrl: "",
      liveUrl: "",
    },
  ];
  const jsProjects = [
    {
      title: "BattleShip Game",
      description:
        "Employ Test Driven Development & Object Oriented Programming with SOLID design principles",
      imgUrl: projImg2,
      repoUrl: "https://github.com/JayRichh/battleship",
      liveUrl: "https://jayrichh.github.io/battleship/",
    },
    {
      title: "Weather Application",
      description:
        "Utilise API's to fetch data, unit conversion, search inputs & geolocation",
      imgUrl: projImg3,
      repoUrl: "https://github.com/JayRichh/weather-app",
      liveUrl: "https://jayrichh.github.io/weather-app/",
    },
    {
      title: "Restaurant Website",
      description:
        "Dynamically render all DOM elements via JavaScript, use of Webpack & Babel with ES6 Modules",
      imgUrl: projImg4,
      repoUrl: "https://github.com/JayRichh/restaurant-page",
      liveUrl: "https://jayrichh.github.io/restaurant-page/",
    },
    {
      title: "Calculator Application",
      description:
        "Supports basic arithmetic operations, keyboard input & responsive design",
      imgUrl: projImg5,
      repoUrl: "https://github.com/JayRichh/calculator",
      liveUrl: "https://jayrichh.github.io/calculator/",
    },
    {
      title: "Workflow Application",
      description:
        "Create a workflow application that allows users to create, edit, delete & save tasks based on projects",
      imgUrl: projImg6,
      repoUrl: "https://github.com/JayRichh/to-do",
      liveUrl: "https://jayrichh.github.io/to-do/",
    },
  ];

  return (
    <section className="project" id="projects">
      {/* <svg id="wave2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill-opacity="1"
          d="M0,192L40,176C80,160,160,128,240,112C320,96,400,96,480,122.7C560,149,640,203,720,192C800,181,880,107,960,101.3C1040,96,1120,160,1200,181.3C1280,203,1360,181,1400,170.7L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        ></path>
      </svg> */}
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Currently working daily to improve my skills and learn new
                    technologies. Here are some of my recent projects with React
                    & Javascript.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">React.js</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">JavaScript</Nav.Link>
                      </Nav.Item>
                      {/* <Nav.Item>
                        <Nav.Link eventKey="third">HTML/ CSS</Nav.Link>
                      </Nav.Item> */}
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__fadeInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {reactProjects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                        <p>
                          Working on a few more projects, will be adding them to
                          this section soon. Progressing with a memory card game
                          and then looking at a shopping cart application.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {jsProjects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      {/* <Tab.Pane eventKey="third">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane> */}
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt={""}></img>
      {/* <svg id="wave3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#a2d9ff"
          fill-opacity="1"
          d="M0,192L40,165.3C80,139,160,85,240,90.7C320,96,400,160,480,181.3C560,203,640,181,720,170.7C800,160,880,160,960,154.7C1040,149,1120,139,1200,122.7C1280,107,1360,85,1400,74.7L1440,64L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
        ></path>
      </svg> */}
    </section>
  );
};
