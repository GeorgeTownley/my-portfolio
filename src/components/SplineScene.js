// components/SplineScene.js
import React from "react";
import Spline from "@splinetool/react-spline";
import "../index.css";

function SplineScene() {
  return (
    <div className="spline-background">
      <Spline scene="https://prod.spline.design/4iMaw3tLXDgD3uLM/scene.splinecode" />
    </div>
  );
}

export default SplineScene;
