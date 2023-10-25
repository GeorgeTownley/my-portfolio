import React from "react";

const Intro = () => {
  return (
    <div className="intro-container" id="intro">
      <span className="name">George Townley</span>
      <span className="tagline">Junior Software Developer</span>
      <p className="intro-paragraph">
        After dedicating a decade to the dynamic world of leisure and climbing,
        I'm pivoting my expertise to software development. My years have imbued
        me with strong leadership skills, an innate ability to communicate
        effectively, and a unique perspective on user experiences. Drawing from
        my background, I am eager to bring a fresh lens to modernizing user
        experience and workflows in the tech sector.
      </p>
      <a href="#projects">
        <button className="highlight-button">my code</button>
      </a>
    </div>
  );
};

export default Intro;
