import React from "react";
import ProjectCard from "./ProjectCard";
import projects from "./ProjectData";

const Projects = () => {
  return (
    <div className="project-container" id="projects">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

export default Projects;
