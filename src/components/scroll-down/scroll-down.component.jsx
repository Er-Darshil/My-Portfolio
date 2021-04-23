/* eslint-disable no-undef */
import React from "react";
import "./scroll-down.styles.css";

const ScrollDown = () => {
  return (
    <div className="myanimate">
      <a
        style={{ textDecoration: "none", color: "#66fcf1" }}
        href="#about"
        className="turn"
      >
        &gt;&gt;&gt;
      </a>
    </div>
  );
};

export default ScrollDown;
