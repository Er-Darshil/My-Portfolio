import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./contact.style.css";

const Contact = () => {
  return (
    <div id="contact">
      <h1 className="pt-3 text-center font-details-b pb-3">CONTACT ME</h1>
      <Row>
        <Col className="d-flex justify-content-center flex-wrap">
          <div className="m-2">
            <a
              href="mailto:sachdevdarshil1999@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              title="Email me"
            >
              <i
                className="far fa-envelope mt-3"
                style={{ color: "white", fontSize: "1.6rem" }}
              ></i>
            </a>
          </div>
          <div className="m-2">
            <a
              href="https://www.linkedin.com/in/darshil-sachdev-59218a143/"
              target="_blank"
              rel="noopener noreferrer"
              title="visit my LinkedIn profile"
            >
              <i
                className="fab fa-linkedin mt-3 ml-3"
                style={{ color: "white", fontSize: "1.6rem" }}
              ></i>
            </a>
          </div>

          <div className="m-2">
            <a
              href="https://github.com/Er-Darshil"
              target="_blank"
              rel="noopener noreferrer"
              title="My other projects"
            >
              <i
                className="fab fa-github mt-3 ml-3"
                style={{ color: "white", fontSize: "1.6rem" }}
              ></i>
            </a>
          </div>
        </Col>
      </Row>
      <hr
        style={{
          border: "0",
          height: "2px",
          width: "100%",
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.4), rgba(255,255,255,1), rgba(255,255,255,0.4))",
        }}
      />
      <div>
        <div
          className="py-2 text-center footer-style"
          style={{ margin: "4% 20%", paddingBottom: "2%" }}
        >
          © DARSHIL SACHDEV &nbsp; {new Date().getFullYear()}
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Contact;
