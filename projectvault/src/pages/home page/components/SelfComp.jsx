import React from "react";
import "../css/SelfComp.css";

import me from "../../../assets/images/about_page/about-me.jpg";
import { Link } from "react-router-dom";

function SelfComp() {
  return (
    <div className="sfc-container">
      <div className="sfc-main-container">
        <div>
          <img src={me} alt="image" />
        </div>

        <div>
          <h1> About Me</h1>
          <p> Learn more about myselft. </p>
          <Link to="/about">
            <button> About Page {">"}</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SelfComp;
