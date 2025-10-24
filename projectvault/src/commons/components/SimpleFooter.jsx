import React from "react";
import "../css/SimpleFooter.css";
import logo from "../../assets/logos/logo.png";

function SimpleFooter() {
  return (
    <div className="sft-container">
      <img src={logo} alt="test" style={{ height: 60 }} />
      <p>&copy; 2024 Project Vault. All rights reserved.</p>
    </div>
  );
}

export default SimpleFooter;
