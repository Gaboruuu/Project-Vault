import React, { useState, useEffect } from "react";
import Header from "../../commons/components/Header";
import CardAction from "./components/CardAction.jsx";
import axios from "axios";
import "./ProjectPage.css";
import Footer from "../../commons/components/Footer.jsx";

function Projects() {
  // State to store project data
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch project data from backend
    axios
      .get("http://localhost:5000/api/projects")
      .then((response) => {
        setProjects(response.data); // Assuming response.data is an array of project objects
      })
      .catch((error) => {
        console.error("Error fetching project data:", error);
      });
  }, []); // Fetch data on component mount

  return (
    <div>
      <Header />
      <div style={{ height: 80 }}></div>
      <div className="prjP-main-container">
        <div className="prjP-text-container">
          <h1>My Projects</h1>
          <p>Click on the card to see more details</p>
        </div>
        <div className="prjP-cards-container">
          {/* Map over projects array and create CardAction components */}
          {projects.map((project) => (
            <CardAction key={project.id} props={project} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Projects;
