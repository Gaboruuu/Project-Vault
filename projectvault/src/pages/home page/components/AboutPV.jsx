import React from "react";
import "../css/AboutPV.css";
import computer from "../../../assets/background/computer.png";

function AboutPV() {
  return (
    <div className="main-container">
      <div className="container">
        <img src={computer}></img>
        <div className="text-container">
          <div className="place-holder">
            <p>explore</p>
          </div>
          <div className="title">
            <h2 className="title">
              The <span style={{ color: "blueviolet" }}> PROJECT VAULT </span>
            </h2>
          </div>
          <div className="desctiption">
            Welcome to PROJECT VAULT, a project that represents a personal
            portfolio of my life as a programmer. This site is meant to be
            explored and give a closer look at every project that was made in my
            journy as a programmer.
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPV;
