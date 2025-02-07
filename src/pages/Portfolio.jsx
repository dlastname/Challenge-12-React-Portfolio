import ProjectCard from "../components/ProjectCard";
import projects from "../assets/projects"; // Your array of project details

export default function Portfolio() {
  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">My Projects</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}
