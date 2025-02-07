import ProjectCard from "../components/ProjectCard";
import projects from "../assets/projects"; 

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
};

export default Portfolio;
