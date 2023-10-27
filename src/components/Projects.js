import React from "react";
import ProjectCard from "./ProjectCard";
import projects from "./ProjectData";

const Projects = () => {
  return (
    <div id="projects" className="full-screen-section">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

export default Projects;
