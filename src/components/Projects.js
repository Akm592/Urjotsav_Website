import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/marketvideo.jpg";
import projImg3 from "../assets/img/speaker.jpeg";
import projImg4 from "../assets/img/project_tiles/OIl India Limited.jpg";
import projImg5 from "../assets/img/project_tiles/HMEL.jpg";
import projImg6 from "../assets/img/project_tiles/HPCL.jpg";
import projImg7 from "../assets/img/project_tiles/gail.jpg";
import projImg9 from "../assets/img/project_tiles/iocl.png";
import projImg8 from "../assets/img/project_tiles/ongc.png";
import projImg10 from "../assets/img/conlave1.jpeg";
import projImg11 from "../assets/img/greenexpo.jpeg";
import projImg12 from "../assets/img/waterrocket.jpg";
import projImg13 from "../assets/img/9. Egg Drop Challenge.jpg";
import projImg14 from "../assets/img/8.JPG";
import projImg15 from "../assets/img/rcplane.jpg";  
import projImg16 from "../assets/img/linefollower.jpg";
import projImg17 from "../assets/img/robowar.jpg";
import projImg18 from "../assets/img/nexus.jpeg";
import projImg19 from "../assets/img/drone.jpg";



import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Water Rocket",
      description: "Hardware",
      imgUrl: projImg12,
    },
    {
      title: "Egg Drop Challenge",
      description: "Design & Development",
      imgUrl: projImg13,
    },
    {
      title: "Robo Soccer",
      description: "Hardware",
      imgUrl: projImg14,
    },
    {
      title: "RC Plane",
      description: "Hardware",
      imgUrl: projImg15,
    },
    {
      title: "Robo war",
      description: "Hardware",
      imgUrl: projImg17,
    },
    {
      title: "Line Follower Bot",
      description: "Hardware",
      imgUrl: projImg16,
    },
  ];

  const Workshops = [
    {
      title: "Green Tech Expo",
      description: "Innovation & Development",
      imgUrl: projImg11,
    },
    {
      title: "Creators Conclave",
      description: "",
      imgUrl: projImg10,
    },
    {
      title: "AI Nexus: ML convergence",
      description: "Design & Development",
      imgUrl: projImg18,
    },
    {
      title: "Tech Connect: Digital Marketing Video challenge",
      description: "PR & Marketing",
      imgUrl: projImg2,
    },
    {
      title: "Keynote Speaker",
      description: "Experiences and Wisdom",
      imgUrl: projImg3,
    },
    {
      title: "Drone Making",
      description: "",
      imgUrl: projImg19,
    },
  ];

    const Sponsors = [
    {
      title: "OIL India Limited",
      description: "Past Sponsor",
      imgUrl: projImg4,
    },
    {
      title: "IOCL",
      description: "Past Sponsor",
      imgUrl: projImg9,
    },
    {
      title: "ONGC",
      description: "Past Sponsor",
      imgUrl: projImg8,
    },
    {
      title: "HMEL",
      description: "Past Sponsor",
      imgUrl: projImg5,
    },
    {
      title: "GAIL",
      description: "Past Sponsor",
      imgUrl: projImg7,
    },
    {
      title: "HPCL",
      description: "Past Sponsor",
      imgUrl: projImg6,
    },
  ];
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                {/* <h2>Urjotsav</h2>
                <p>The national level inter-Collegiate annual technical festival of Rajiv Gandhi Institute of Petroleum Technology organized by the Science and Technical Council every year. Its the result of pro-active effort of students towards creating an experience that's not only exhilarating in its sheer Grandeur but also a trigger for curiosity in geeky minds. It aims at providing a platform for tomorrow's industry leaders to showcase their talents in various competitions, and to today's young minds to collaborate on various exciting hackathons, problem statement challenges as well as workshops. Thus making them a team player with leadership skills.</p> */}
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Competitions</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Workshops</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Sponsors</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                     
                          <Row>
                        {
                          Workshops.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>

                    </Tab.Pane>
                    <Tab.Pane eventKey="third">

                        <Row>
                        {
                          Sponsors.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    
    </section>
  )
}
