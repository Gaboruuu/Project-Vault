import React, { useState, useEffect } from "react";
import Header from "../../commons/components/Header";
import Footer from "../../commons/components/Footer";
import MainInfoPrj from "./components/MainInfoPrj";
import ShowcasePrj from "./components/ShowcasePrj";
import AboutPrj from "./components/AboutPrj";
import GitHubPrj from "./components/GitHubPrj";
import axios from "axios";

function ProjectsPrez({ value }) {
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    const projectId = value;
    axios
      .get(`http://localhost:5000/api/projects/${projectId}`)
      .then((response) => {
        setProjectData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching project data:", error);
      });
  }, []);

  if (!projectData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header />
      <div style={{ height: 80 }}></div>
      <MainInfoPrj data={projectData} />
      <ShowcasePrj data={projectData} />
      <AboutPrj data={projectData} />
      <GitHubPrj data={projectData} />
      <Footer />
    </div>
  );
}

export default ProjectsPrez;
