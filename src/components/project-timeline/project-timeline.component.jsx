/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {
  Timeline,
  Events,
  ImageEvent,
  createTheme,
  themes,
} from "@merc/react-timeline";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//projects

import Dashboard from "../../assets/img/projects/Dashboard.png";
import URL_Grabber from "../../assets/img/projects/chromeExtension.png";
import Chatapp from "../../assets/img/projects/chatapp.png";

//skills
import L_REACT from "../../assets/img/skills/react.svg";
import Image from "react-bootstrap/Image";
import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_JAVASCRIPT from "../../assets/img/skills/javascript.svg";

import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import "./project-timeline.style.css";

const customTheme = createTheme(themes.default, {
  card: {
    backgroundColor: "#efefef",
  },
  marker: {
    borderColor: "#333333",
  },
  timelineTrack: {
    backgroundColor: "#333333",
  },
});

const ProjectTimeline = () => {
  return (
    <div id="projects">
      <h1 className="pt-4 text-center font-details pb-3">PROJECTS</h1>
      <Timeline theme={customTheme}>
        <Events>
          <ImageEvent
            className="text-center"
            text="Chat - Application"
            src={Chatapp}
            alt="Chat Application"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This is a Chat app created
                        where user can login into the room and start chatting
                        with other users which are online in that room.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>
                            You can chat with the users of the specific room
                          </li>
                          <li>
                            You can know how many users are online in that room
                          </li>
                          <li>Responsive Design</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <Row>
                          <Col md={6} xs={12}>
                            <ul>
                              <br />
                              <li>
                                <span className="p-2">
                                  <Image
                                    src={L_HTML5}
                                    alt="HTML 5"
                                    rounded
                                    className="image-style1 m-1"
                                  ></Image>
                                  HTML5
                                </span>
                              </li>
                              <li>
                                <span className="p-2">
                                  <Image
                                    src={L_CSS3}
                                    alt="CSS 3"
                                    rounded
                                    className="image-style1 m-1"
                                  ></Image>
                                  CSS3
                                </span>
                              </li>
                              <li>
                                <span className="p-2">
                                  <Image
                                    src={L_JAVASCRIPT}
                                    alt="JAVASCRIPT"
                                    rounded
                                    className="image-style1 m-1"
                                  ></Image>
                                  JAVASCRIPT
                                </span>
                              </li>
                              <li>
                                <span className="p-2">
                                  <Image
                                    src={L_REACT}
                                    alt="Reactjs"
                                    rounded
                                    className="image-style1 m-1"
                                  ></Image>
                                  React
                                </span>
                              </li>
                            </ul>
                          </Col>
                        </Row>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <Button
                  variant="dark"
                  className="mt-2"
                  size="sm"
                  href="https://super-cool-site-by-er-darshil.netlify.app/"
                  style={{ width: "27%", color: "white", marginLeft: "10%" }}
                  target="_blank"
                >
                  SEE LIVE
                </Button>
                <Button
                  variant="dark"
                  className="mt-2"
                  size="sm"
                  href="https://github.com/Er-Darshil/Chat-Application"
                  style={{ width: "27%", color: "white", marginRight: "10%" }}
                  target="_blank"
                >
                  SOURCE CODE
                </Button>
              </div>
            </div>
          </ImageEvent>
          {/* URL grabber */}
          <ImageEvent
            className="text-center"
            text="URL Grabber"
            src={URL_Grabber}
            alt="URL Grabber"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This is a Simple Google
                        chrome Extension which can grab the url of the tab you
                        are currently Working
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Gets the url of current tab</li>
                          <li>Can delete all the urls</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <Row>
                          <Col md={6} xs={12}>
                            <ul>
                              <br />
                              <li>
                                <span className="p-2">
                                  <Image
                                    src={L_JAVASCRIPT}
                                    alt="JAVASCRIPT"
                                    rounded
                                    className="image-style1 m-1"
                                  ></Image>
                                  JAVASCRIPT
                                </span>
                              </li>
                              <li>
                                <span className="p-2">
                                  <Image
                                    src={L_HTML5}
                                    alt="HTML5"
                                    rounded
                                    className="image-style1 m-1"
                                  ></Image>
                                  HTML
                                </span>
                              </li>
                              <li>
                                <span className="p-2">
                                  <Image
                                    src={L_CSS3}
                                    alt="CSS3"
                                    rounded
                                    className="image-style1 m-1"
                                  ></Image>
                                  CSS
                                </span>
                              </li>
                            </ul>
                          </Col>
                          <Col md={6} xs={12}>
                            <ul>
                              <br />
                              <br />
                            </ul>
                          </Col>
                        </Row>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <Button
                  variant="dark"
                  className="mt-2"
                  size="sm"
                  href="https://github.com/Er-Darshil/URL_Grabber/tree/master"
                  style={{ width: "27%", color: "white", margin: "auto" }}
                  target="_blank"
                >
                  SOURCE CODE
                </Button>
              </div>
            </div>
          </ImageEvent>
          {/* Admin Dashboard */}
          <ImageEvent
            className="text-center"
            text="Admin Dashboard"
            src={Dashboard}
            alt="Admin Dashboard"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This is a Admin Dashboard
                        created with Html, CSS, Javascript, React.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>
                            Various Sections are made like recent orders,
                            updates, customer review
                          </li>
                          <li>Responsive Design</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <br />
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_JAVASCRIPT}
                                alt="JAVASCRIPT"
                                rounded
                                className="image-style1 m-1"
                              ></Image>
                              JAVASCRIPT
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML"
                                rounded
                                className="image-style1 m-1"
                              ></Image>
                              HTML
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS"
                                rounded
                                className="image-style1 m-1"
                              ></Image>
                              CSS
                            </span>
                          </li>

                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="REACT"
                                rounded
                                className="image-style1 m-1"
                              ></Image>
                              REACTJS
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <Button
                  variant="dark"
                  className="mt-2"
                  size="sm"
                  href="https://melodious-parfait-7c2d02.netlify.app/"
                  style={{ width: "27%", color: "white", marginLeft: "10%" }}
                  target="_blank"
                >
                  SEE LIVE
                </Button>
                <Button
                  variant="dark"
                  className="mt-2"
                  size="sm"
                  href="https://github.com/Er-Darshil/Dashboard"
                  style={{ width: "27%", color: "white", margin: "auto" }}
                  target="_blank"
                >
                  SOURCE CODE
                </Button>
              </div>
            </div>
          </ImageEvent>
        </Events>
      </Timeline>
    </div>
  );
};

export default ProjectTimeline;
