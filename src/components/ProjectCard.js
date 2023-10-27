import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="project-box">
      <img src={project.image} alt={project.title} />
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <div className="tags">
        {project.tags.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>
      <div className="buttons">
        <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
          Demo
        </a>
        <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
          GitHub Repo
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
