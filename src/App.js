import React from "react";
import NavBar from "./components/NavBar";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import ContactPage from "./components/ContactPage";
import "./App.css";
import ThreeScene from "./components/ThreeScene";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ThreeScene />
      <Intro />
      <Projects />
      <ContactPage />
    </div>
  );
}

export default App;
