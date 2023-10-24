import React from "react";
import NavBar from "./components/NavBar";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Intro />
      <Projects />
    </div>
  );
}

export default App;
