import React from 'react';
// import './styles/Project.css';

const Project = ({ title, image, liveLink, githubLink }) => {
  return (
    <div className="project">
      <img src={image} alt={title} className="project-image" />
      <h3>{title}</h3>
      <div className="project-links">
        <a href={liveLink} target="_blank" rel="noopener noreferrer">
          Live App
        </a>
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </div>
    </div>
  );
};

export default Project;