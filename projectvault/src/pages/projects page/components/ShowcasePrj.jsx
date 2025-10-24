import React from "react";
import "../css/ShowcasePrj.css";
import Coverflow from "../../../commons/components/Coverflow.jsx";

function ShowcasePrj({ data }) {
  const images = [
    data.swiperImage1,
    data.swiperImage2,
    data.swiperImage3,
    data.swiperImage4,
    data.swiperImage5,
  ];

  const formattedInfo1 = data.Info1.replace(/\\n/g, "<br>");
  const formattedInfo2 = data.Info2.replace(/\\n/g, "<br>");

  return (
    <div className="scprj-page-container">
      <div className="scprj-main-container">
        <div className="scprj-image-container">
          <Coverflow images={images} />
        </div>
        <div className="scprj-info-container">
          <h1>How does it works?</h1>
          <p className="scprj-subtitle">Here is everything you need to know</p>
          <div className="scprj-text-container">
            <p dangerouslySetInnerHTML={{ __html: formattedInfo1 }}></p>
            <p dangerouslySetInnerHTML={{ __html: formattedInfo2 }}></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowcasePrj;
