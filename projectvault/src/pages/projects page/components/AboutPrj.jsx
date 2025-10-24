import React from "react";
import "../css/AboutPrj.css";

function AboutPrj({ data }) {
  return (
    <div className="aprj-page-container">
      <div className="aprj-title-container">
        <h1>powered by</h1>
        <p>
          These languages provide the essential framework for our solution,
          ensuring its reliability and efficiency.
        </p>
      </div>
      <div className="aprj-main-container">
        <div className="aprj-lang-container">
          <img src={data.language1_logo} />
          <h1>{data.language1_name}</h1>
          <p>{data.language1_description}</p>
          <p>{data.language1_version}</p>
          <p>{data.language1_state}</p>
        </div>

        {data.language2_name != null ? (
          <div className="aprj-lang-container">
            <img src={data.language2_logo} />
            <h1>{data.language2_name}</h1>
            <p>{data.language2_description}</p>
            <p>{data.language2_version}</p>
            <p>{data.language2_state}</p>
          </div>
        ) : null}

        {data.language3_name != null ? (
          <div className="aprj-lang-container">
            <img src={data.language3_logo} />
            <h1>{data.language3_name}</h1>
            <p>{data.language3_description}</p>
            <p>{data.language3_version}</p>
            <p>{data.language3_state}</p>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default AboutPrj;
