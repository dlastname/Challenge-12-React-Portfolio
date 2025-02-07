import { FaGithub } from "react-icons/fa";
// import "../styles/ProjectCard.css";

const ProjectCard = ({ title, image, deployedUrl, githubUrl, subtitle }) => {
  return (
    <div className="project-card" style={{ backgroundImage: `url(${image})` }}>
      <div className="overlay">
        <h3>
          {deployedUrl ? (
            <a href={deployedUrl} target="_blank" rel="noopener noreferrer">{title}</a>
          ) : (
            title
          )}
        </h3>
        <p>{subtitle}</p>
        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
          <FaGithub size={30} />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
