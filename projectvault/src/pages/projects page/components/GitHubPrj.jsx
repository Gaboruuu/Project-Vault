import React, { useEffect, useState, useRef } from "react";
import "../css/GitHubPrj.css";
import { NavLink } from "react-router-dom";
import SlideShow from "../../../commons/components/SlideShow";

function GitHubPrj({ data }) {
  const [containerHeight, setContainerHeight] = useState(null);
  const ref = useRef(null);

  const handleButtonClick = (destination) => {
    window.location.href = destination;
  };

  useEffect(() => {
    function handleResize() {
      if (ref.current && ref.current.querySelector(".ghprj-main-container")) {
        const itemContainerHeight = ref.current.querySelector(
          ".ghprj-item-container"
        ).offsetHeight;
        const imageContainerHeight = ref.current.querySelector(
          ".ghprj-ss-container"
        ).offsetHeight;
        const totalHeight = itemContainerHeight + imageContainerHeight; // Add 100px extra space
        setContainerHeight(totalHeight);
      }
    }

    handleResize(); // Initial calculation

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const images = [data.gitImage1, data.gitImage2, data.gitImage3].filter(
    (image) => image !== null && image !== undefined
  );

  return (
    <div className="ghprj-container">
      <div className="ghprj-main-container" style={{ height: containerHeight }}>
        <div className="ghprj-item-container" ref={ref}>
          <div className="ghprj-text-container">
            <div className="ghprj-title">
              <h1>Project</h1>
              <h1>On GitHub</h1>
            </div>
            <p className="ghprj-description">
              Feel free to explore the source code on my GitHub. There you can
              find the entire code behind the program.
            </p>
          </div>
          <div className="ghprj-button-container">
            <div className="ghprj-button-nav">
              <button
                className="ghprj-button"
                onClick={() => handleButtonClick(data.gitLink)}
              >
                Open On GitHub {" > "}
              </button>
            </div>
          </div>
        </div>
        <div className="ghprj-ss-container">
          <SlideShow imageList={images} className="ghprj-ss" />
        </div>
      </div>
    </div>
  );
}

export default GitHubPrj;
