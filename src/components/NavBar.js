import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleUser,
  faCode,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

import { library } from "@fortawesome/fontawesome-svg-core";

// Add icons to the library for convenient access
library.add(faCircleUser, faCode, faPaperPlane);

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="nav-icon">
        <a href="#intro">
          <FontAwesomeIcon icon={faCircleUser} size="2x" />
        </a>
      </div>
      <div className="nav-icon">
        <a href="#projects">
          <FontAwesomeIcon icon={faCode} size="2x" />
        </a>
      </div>
      <div className="nav-icon">
        <a href="#contact">
          <FontAwesomeIcon icon={faPaperPlane} size="2x" />
        </a>
      </div>
    </div>
  );
};

export default NavBar;
