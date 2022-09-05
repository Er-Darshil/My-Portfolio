/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import "./about.style.css"
import Image from "react-bootstrap/Image"
import Button from "react-bootstrap/Button"

import Profile from "../../assets/img/profile/avatar-modified.png"

const About = () => {
  return (
    <div id="about">
      <div className="about">
        <h1 className="pt-2 mt-3 text-center font-details pb-4">ABOUT ME</h1>
        <Container>
          <Row className="pt-3 pb-4 align-items-center">
            <Col xs={12} md={6}>
              {/* Profile pic */}
              <Row className="justify-content-center mb-2 mr-2">
                <Image
                  className="profile justify-content-end"
                  src={Profile}
                  style={{ borderRadius: "100%" }}
                  alt="Darshil's Image"
                  thumbnail
                  fluid
                />
              </Row>
            </Col>
            {/* About me description */}
            <Col xs={12} md={6}>
              <Row className=" align-items-start p-2 my-details rounded">
                {/* Description */}
                Hi there! I am <strong>&nbsp;Darshil Sachdev</strong>
                <br />
                A passionate programmer, born and brought up in India. I am a
                Frontend Web Developer Fresher skilled with HTML, CSS,
                JAVASCRIPT and REACTJS.
                <br />
                In 2021, I have completed my Engineering with specialization in
                'Electronics and Communication'.
                <br />
                I love learning about new technologies, what problems are they
                solving and How can I use them to build better and scalable
                products.
                <br /> <br />
              </Row>
              <Row>
                {/* buttons */}
                <Col className="d-flex justify-content-center flex-wrap">
                  <div>
                    <a href="#contact">
                      <Button className="m-2" variant="outline-primary">
                        Let's Talk
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://drive.google.com/file/d/1JCf8dALxS42OiPIzeOR_Mya3bNc5Um58/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-success">
                        My Resume
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://github.com/Er-Darshil"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://www.linkedin.com/in/darshil-sachdev-59218a143/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-info">
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default About
