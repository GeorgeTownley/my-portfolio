import React from "react";

function Intro() {
  return (
    <div className="intro" id="intro">
      <h1>Hi! my name's George</h1>
      <h2>Junior Software Developer</h2>
      <button onClick={() => (window.location.href = "#projects")}>
        My Code
      </button>
    </div>
  );
}

export default Intro;
