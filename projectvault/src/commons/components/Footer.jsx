import React from "react";
import "../css/Footer.css";
import github from "../../assets/logos/github.png";
import insta from "../../assets/logos/insta.png";
import x from "../../assets/logos/X.png";
import facebook from "../../assets/logos/facebook.png";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logos/logo.png";

function Footer() {
  const handleButtonClick = (destination) => {
    window.location.href = destination;
  };

  return (
    <div className="fot-main-container">
      <div className="fot-container">
        <div className="fot-about-container">
          <img src={logo} alt="test" className="fot-about-logo" />
          <p> Socials</p>
          <div className="fot-button-container">
            <button
              onClick={() => handleButtonClick("https://github.com/Gaboruuu")}
            >
              <img src={github} />
            </button>
            <button
              onClick={() =>
                handleButtonClick("https://www.instagram.com/gaboruul/")
              }
            >
              <img src={insta} />
            </button>
            <button
              onClick={() => handleButtonClick("https://twitter.com/gaboruuu")}
            >
              <img src={x} />
            </button>
            <button
              onClick={() =>
                handleButtonClick("https://www.facebook.com/iamgoobi/")
              }
            >
              <img src={facebook} />
            </button>
          </div>
        </div>
        <div className="fot-pages-category">
          <div className="fot-pages-container">
            <h2>Pages</h2>
            <a href="/">Home</a>
            <a href="/projects">Projects</a>
            <a href="/about">About</a>
          </div>
          <div className="fot-pages-container">
            <h2>Projects</h2>
            <a href="/projects/gymsimulator">Gym Simulator</a>
            <a href="/projects/tryout">Try Out</a>
            <a href="/projects/cinemacity">Cinema City</a>
            {/* <a href="/projects/projectleague">Project League</a>
            <a href="/projects/projectnewaction">Project New Action</a>
            <a href="/projects/projectvault">Project Vault</a>
            <a href="/projects/thehunt">The Hunt</a>
            <a href="/projects/hoyoverseguide">Hoyoverse Guide</a> */}
          </div>
        </div>
      </div>
      <div className="fot-copyright">
        <p>&copy; 2024 Project Vault. All rights reserved</p>
      </div>
    </div>
  );
}

export default Footer;
