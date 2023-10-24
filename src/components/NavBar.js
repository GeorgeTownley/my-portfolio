import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faProjectDiagram,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

// Add icons to the library for convenient access
library.add(faHome, faProjectDiagram, faEnvelope);

const NavBar = () => {
  return (
    <div className="navbar">
      <a href="#intro">
        <FontAwesomeIcon icon={faHome} />
      </a>
      <a href="#projects">
        <FontAwesomeIcon icon={faProjectDiagram} />
      </a>
      <a href="#contact">
        <FontAwesomeIcon icon={faEnvelope} />
      </a>
    </div>
  );
};

export default NavBar;
