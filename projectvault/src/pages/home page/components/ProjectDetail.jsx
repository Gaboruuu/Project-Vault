import React, { useEffect, useState, useRef } from "react";
import "../css/ProjectDetail.css";
import { NavLink } from "react-router-dom";

import placehodler from "../../../assets/img2.png";
import SlideShow from "../../../commons/components/SlideShow";

import image1 from "../../../assets/images/slide1.png";
import image2 from "../../../assets/images/slide2.png";

const imageProjects = [image1, image2];

function ProjectDetail() {
  const [containerHeight, setContainerHeight] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    function handleResize() {
      if (ref.current && ref.current.querySelector(".prjH-main-container")) {
        console.log("Main container found");
        const itemContainerHeight = ref.current.querySelector(
          ".prjH-item-container"
        ).offsetHeight;
        const imageContainerHeight =
          ref.current.querySelector(".prjH-ss-container").offsetHeight;
        const totalHeight = itemContainerHeight + imageContainerHeight; // Add 100px extra space
        console.log("Total height:", totalHeight);
        setContainerHeight(totalHeight);
      }
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="prjH-container">
      <div className="prjH-main-container" style={{ height: containerHeight }}>
        <div className="prjH-item-container" ref={ref}>
          <div className="prjH-text-container">
            <p className="prjH-info">project details</p>
            <div className="prjH-title">
              <h1>Explore</h1>
              <h1>the Projects</h1>
            </div>
            <p className="prjH-description">
              Feel free to explore my journey as a programmer through the
              projects I've created. They reflect my growth, challenges, and
              passion for coding. You can access the page from the button down
              below or the button from the navigation bar.
            </p>
          </div>
          <div className="prjH-button-container">
            <NavLink to="/projects" className="prjH-button-nav">
              <button className="prjH-button">Browse Projects {" > "}</button>
            </NavLink>
          </div>
        </div>
        <div className="prjH-ss-container">
          <SlideShow imageList={imageProjects} className="prjH-ss" />
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;
