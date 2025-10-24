import React from "react";
import "../css/Background.css"; // Import the stylesheet

import instagram from "../../../assets/logos/insta.png";
import x from "../../../assets/logos/X.png";
import github from "../../../assets/logos/github.png";
import facebook from "../../../assets/logos/facebook.png";
import home from "../../../assets/background/home.png";

const Background = () => {
  const handleButtonClick = (destination) => {
    window.location.href = destination;
  };

  return (
    <div className="bgH-main-container">
      <div className="bgH-compo-container">
        <div className="bgH-item-container">
          <h1>
            welcome to gaboruu's {}
            <span style={{ color: "blueviolet" }}>project vault</span>
          </h1>
          <span className="bgH-description">
            Welcome to PROJECT VAULT, a project that represents a personal
            portfolio of my life as a programmer.{" "}
          </span>
          <span className="bgH-contact">you can find me here</span>
          <div className="bgH-buttons-container">
            <button
              onClick={() => handleButtonClick("https://github.com/Gaboruuu")}
            >
              <img src={github}></img>
            </button>
            <button
              onClick={() =>
                handleButtonClick("https://www.instagram.com/gaboruul/")
              }
            >
              <img src={instagram}></img>
            </button>
            <button
              onClick={() => handleButtonClick("https://twitter.com/gaboruuu")}
            >
              <img src={x}></img>
            </button>
            <button
              onClick={() =>
                handleButtonClick("https://www.facebook.com/iamgoobi/")
              }
            >
              <img src={facebook}></img>
            </button>
          </div>
        </div>
        <div className="bgH-image-home">
          <img src={home} />
        </div>
      </div>
    </div>
  );
};

export default Background;
