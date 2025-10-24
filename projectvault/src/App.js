import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home page/Home";
import Projects from "./pages/projects page/Projects";
import ProjectPrez from "./pages/projects page/ProjectPrez.js";
import Header from "./commons/components/Header.jsx";
import { CssBaseline } from "@mui/material";
import About from "./pages/about page/About.js";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/projects" exact Component={Projects} />
          <Route path="/about" exact Component={About} />
          <Route
            path="/projects/gymsimulator"
            exact
            element={<ProjectPrez value={1} />}
          />
          <Route
            path="/projects/tryout"
            exact
            element={<ProjectPrez value={2} />}
          />
          <Route
            path="/projects/cinemacity"
            exact
            element={<ProjectPrez value={3} />}
          />
          {/* <Route
            path="/projects/fcbarcelonafansite"
            exact
            element={<ProjectPrez value={3} />}
          />
          <Route
            path="/projects/projectleague"
            exact
            element={<ProjectPrez value={6} />}
          />
          <Route
            path="/projects/projectnewaction"
            exact
            element={<ProjectPrez value={7} />}
          />
          <Route
            path="/projects/projectvault"
            exact
            element={<ProjectPrez value={8} />}
          />
          <Route
            path="/projects/thehunt"
            exact
            element={<ProjectPrez value={9} />}
          />
          <Route
            path="/projects/hoyoverseguide"
            exact
            element={<ProjectPrez value={10} />}
  />*/}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
