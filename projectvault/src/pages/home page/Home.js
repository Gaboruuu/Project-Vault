import React from "react";
import "./Home.css";

import BackGround from "./components/Background.jsx";
import TopButton from "../../commons/components/TopButton.jsx";
import Header from "../../commons/components/Header.jsx";
import AboutPV from "./components/AboutPV.jsx";
import ProjectDetail from "./components/ProjectDetail.jsx";
import Question from "./components/Question.jsx";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import SimpleFooter from "../../commons/components/SimpleFooter.jsx";
import SelfComp from "./components/SelfComp.jsx";

function Home() {
  return (
    <>
      <Header />
      <BackGround />
      <AboutPV />
      <ProjectDetail />
      <Question />
      <SelfComp />
      <TopButton />
      <SimpleFooter />
    </>
  );
}

export default Home;
