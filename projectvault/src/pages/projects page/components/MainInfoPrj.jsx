import React from "react";
import "../css/MainInfoPrj.css";

function MainInfoPrj({ data }) {
  return (
    <div
      className="miprj-page-container"
      style={{
        backgroundImage: `url(${data.BackImage})`,
        backgroundSize: "cover",
      }}
    >
      <div className="miprj-main-container">
        <div className="miprj-text-container">
          <h1>{data.Title}</h1>
          <p>{data.Description}</p>
        </div>
        <div className="miprj-image-container">
          <img
            src={data.CoverLogo}
            alt="Project"
            style={{ borderRadius: 20 }}
          />
        </div>
      </div>
    </div>
  );
}

export default MainInfoPrj;
