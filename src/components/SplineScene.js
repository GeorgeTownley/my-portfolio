// components/SplineScene.js
import React from "react";
import Spline from "@splinetool/react-spline";
import "../index.css";

function SplineScene() {
  return (
    <div className="spline-background">
      <Spline scene="https://prod.spline.design/ZzB2kKy2yaVajFmV/scene.splinecode" />
    </div>
  );
}

export default SplineScene;
