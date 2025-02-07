import "../styles/ProjectCard.css";

const ProjectCard = ({ title, image, deployedUrl, githubUrl, subtitle }) => {
  return (
    <div className="col">
      <div className="card project-card">
        <div
          className="card-img-top project-image"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div className="card-body text-center">
          <h5 className="card-title">
            {deployedUrl ? (
              <a href={deployedUrl} target="_blank">
                {title}
              </a>
            ) : (
              title
            )}
          </h5>
          <p className="card-text">{subtitle}</p>
          <a href={githubUrl} target="_blank">
            <img
              src={`/github-mark-white.svg`}
              alt="GitHub"
              width="30"
              height="30"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
