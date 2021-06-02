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

import L_ToDoList from "../../assets/img/projects/todolist.png";
import L_PizzaStore from "../../assets/img/projects/pizzastore.png";
import L_QUIZAPP from "../../assets/img/projects/quizapp.png";
import L_TESLACLONE from "../../assets/img/projects/TeslaClone.png";

//skills
import L_REACT from "../../assets/img/skills/react.svg";
import L_NODE_JS from "../../assets/img/skills/nodejs.svg";
import L_EXPRESS from "../../assets/img/skills/express.svg";
import L_MONGODB from "../../assets/img/skills/mongodb.svg";
import Image from "react-bootstrap/Image";
import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_BOOTSTRAP4 from "../../assets/img/skills/bootstrap-4.svg";
import L_JAVASCRIPT from "../../assets/img/skills/javascript.svg";
import L_EJS from "../../assets/img/skills/ejs.svg";
import L_STYLED_COMPONENTS from "../../assets/img/skills/styled-components.svg";
import L_MATERIAL_UI from "../../assets/img/skills/material-ui-1.svg";

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
            text="ToDo App"
            src={L_ToDoList}
            alt="ToDo App"
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
                        <strong>Description:</strong> This is a Todo App created
                        with EJS, CSS, Javascript that keeps a track of your
                        Todo
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Keeps track of your Todos</li>
                          <li>Custom Lists Can be Made</li>
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
                                    src={L_EJS}
                                    alt="EJS"
                                    rounded
                                    className="image-style1 m-1"
                                  ></Image>
                                  EJS
                                </span>
                              </li>
                            </ul>
                          </Col>
                          <Col xs={12} md={6}>
                            <ul>
                              <br />
                              <br />
                              <li>
                                <span className="p-2">
                                  <Image
                                    src={L_NODE_JS}
                                    alt="NODEJS"
                                    rounded
                                    className="image-style m-1"
                                  ></Image>
                                  NODEJS
                                </span>
                              </li>
                              <br />
                              <li>
                                <span className="p-2">
                                  <Image
                                    src={L_EXPRESS}
                                    alt="EXPRESS"
                                    rounded
                                    className="image-style m-1"
                                  ></Image>
                                  EXPRESS
                                </span>
                              </li>
                              <br />
                              <li>
                                <span className="p-2">
                                  <Image
                                    src={L_MONGODB}
                                    alt="MONGODB"
                                    rounded
                                    className="image-style m-1"
                                  ></Image>
                                  MONGODB
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
                  href="https://polar-reef-76066.herokuapp.com/"
                  style={{ width: "27%", color: "white", marginLeft: "10%" }}
                  target="_blank"
                >
                  SEE LIVE
                </Button>
                <Button
                  variant="dark"
                  className="mt-2"
                  size="sm"
                  href="https://github.com/Er-Darshil/ToDo-List"
                  style={{ width: "27%", color: "white", marginRight: "10%" }}
                  target="_blank"
                >
                  SOURCE CODE
                </Button>
              </div>
            </div>
          </ImageEvent>
          {/* Pizza Store Website */}
          <ImageEvent
            className="text-center"
            text="Pizza Store Website"
            src={L_PizzaStore}
            alt="PizzaStore"
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
                        <strong>Description:</strong> This is a Pizza Store
                        Website created with EJS, Javascript, Bootstrap, Nodejs,
                        Mongodb that Allows user to Order Pizza.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Keeps track of your Orders</li>
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
                                    src={L_BOOTSTRAP4}
                                    alt="BOOTSTRAP"
                                    rounded
                                    className="image-style1 m-1"
                                  ></Image>
                                  BOOTSTRAP
                                </span>
                              </li>
                              <li>
                                <span className="p-2">
                                  <Image
                                    src={L_EJS}
                                    alt="EJS"
                                    rounded
                                    className="image-style1 m-1"
                                  ></Image>
                                  EJS
                                </span>
                              </li>

                              <li>
                                <span className="p-2">
                                  <Image
                                    src={L_NODE_JS}
                                    alt="NODEJS"
                                    rounded
                                    className="image-style1 m-1"
                                  ></Image>
                                  NODEJS
                                </span>
                              </li>
                            </ul>
                          </Col>
                          <Col md={6} xs={12}>
                            <ul>
                              <br />
                              <br />
                              <li>
                                <span className="p-2">
                                  <Image
                                    src={L_EXPRESS}
                                    alt="EXPRESS"
                                    rounded
                                    className="image-style1 m-1"
                                  ></Image>
                                  EXPRESS
                                </span>
                              </li>
                              <br />
                              <li>
                                <span className="p-2">
                                  <Image
                                    src={L_MONGODB}
                                    alt="MONGODB"
                                    rounded
                                    className="image-style1 m-1"
                                  ></Image>
                                  MONGODB
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
                  href="https://github.com/Er-Darshil/PizzaStore-Project"
                  style={{ width: "27%", color: "white", margin: "auto" }}
                  target="_blank"
                >
                  SOURCE CODE
                </Button>
              </div>
            </div>
          </ImageEvent>
          {/* Quiz App */}
          <ImageEvent
            className="text-center"
            text="Quiz App"
            src={L_QUIZAPP}
            alt="QUIZAPP"
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
                        <strong>Description:</strong> This is a Quiz App created
                        with Html, CSS, Javascript, React.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Questions with Multiple options</li>
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
                  href="https://github.com/Er-Darshil/quiz-app"
                  style={{ width: "27%", color: "white", margin: "auto" }}
                  target="_blank"
                >
                  SOURCE CODE
                </Button>
              </div>
            </div>
          </ImageEvent>
          {/* Tesla Clone */}
          <ImageEvent
            className="text-center"
            text="Tesla Clone"
            src={L_TESLACLONE}
            alt="Tesla Clone"
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
                        <strong>Description:</strong> This is a Tesla Clone
                        created with Reactjs, Styled components & Material-ui.
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <br />
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="REACTJS"
                                rounded
                                className="image-style1 m-1"
                              ></Image>
                              REACTJS
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_STYLED_COMPONENTS}
                                alt="STYLED COMPONENTS"
                                rounded
                                className="image-style1 m-1"
                              ></Image>
                              STYLED COMPONENTS
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_MATERIAL_UI}
                                alt="MATERIAL UI"
                                rounded
                                className="image-style1 m-1"
                              ></Image>
                              MATERIAL UI
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
                  href="https://github.com/Er-Darshil/Tesla-Clone"
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
