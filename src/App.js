import React from "react";
import NavBar from "./components/NavBar";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import ContactPage from "./components/ContactPage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Intro />
      <Projects />
      <ContactPage />
    </div>
  );
}

export default App;
