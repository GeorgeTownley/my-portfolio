import React from "react";
import NavBar from "./components/NavBar";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import ContactPage from "./components/ContactPage";
import SplineScene from "./components/SplineScene";
import "./App.css";
import "./mobile.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <SplineScene />
      <Intro />
      <Projects />
      <ContactPage />
    </div>
  );
}

export default App;
