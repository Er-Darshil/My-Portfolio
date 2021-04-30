import React from "react";
import Container from "react-bootstrap/Container";
import Fade from "react-bootstrap/Fade";
import Slide from "react-reveal/Slide";

import MyNavbar from "./components/my-navbar/mynavbar.component";
import MyCarousal from "./components/my-carousal/my-carousal.component";
import TitleMessage from "./components/title-message/title-message.component";
import About from "./pages/about/about.components";
import Skills from "./pages/skills/skills.component";
import ProjectTimeline from "./components/project-timeline/project-timeline.component";
import Contact from "./pages/contact/contact.component";
import Particles from "react-particles-js";
import { particlesOptions } from "./particlesOption";

import "./App.css";

const App = () => {
  return (
    <div className="App" style={{ position: "relative" }}>
      <TitleMessage />
      <MyCarousal />
      <MyNavbar />
      {/* About me section */}
      <Particles
        className="particles particles-box"
        params={particlesOptions}
      />
      <div>
        <Container className="container-box rounded">
          <Fade duration={500}>
            <About />
          </Fade>
        </Container>
      </div>
      {/* skills section */}
      <hr />

      <div style={{ backgroundColor: "#333333" }}>
        <Container className="container-box rounded">
          <Slide bottom duration={500}>
            <Skills />
          </Slide>
        </Container>
      </div>

      {/* Project Timeline */}

      <div>
        <Container className="container-box rounded">
          <Slide bottom duration={500}>
            <hr />
            <ProjectTimeline />
          </Slide>
        </Container>
      </div>
      <hr />
      <br />

      {/* contact */}
      <div style={{ backgroundColor: "#333333" }}>
        <Container className="container-box rounded">
          <Slide bottom duration={500}>
            <Contact />
          </Slide>
        </Container>
      </div>
    </div>
  );
};

export default App;
