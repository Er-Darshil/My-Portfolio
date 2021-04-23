import React from "react";
import Container from "react-bootstrap/Container";
import Fade from "react-bootstrap/Fade";

import MyNavbar from "./components/my-navbar/mynavbar.component";
import MyCarousal from "./components/my-carousal/my-carousal.component";
import TitleMessage from "./components/title-message/title-message.component";
import About from "./pages/about/about.components";
import Skills from "./pages/skills/skills.component";

import "./App.css";

const App = () => {
  return (
    <div className="App" style={{ position: "relative" }}>
      <MyNavbar />
      <MyCarousal />
      <TitleMessage />
      {/* About me section */}
      <div className="mt-5">
        <Container className="container-box rounded">
          <Fade duration={500}>
            <About />
          </Fade>
        </Container>
      </div>

      <div style={{ backgroundColor: "#333333" }} className="mt-5">
        <Container className="container-box rounded">
          <Fade duration={500}>
            <Skills />
          </Fade>
        </Container>
      </div>
    </div>
  );
};

export default App;
