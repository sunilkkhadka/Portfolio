import { Element } from "react-scroll";

import projectData from "../data/project";
import ProjectItem from "../molecules/ProjectItem";

const Projects = () => {
  return (
    <Element name="projects">
      <section className="projects">
        <div className="wrapper projects__container">
          <div className="projects__intro">
            <h1 className="projects__intro-title">Featured Projects</h1>
            <p className="projects__intro-description">
              Here are some of the selected projects that showcase my passion
              for front-end development.
            </p>
          </div>
          <div className="projects__list">
            {projectData.map((project) => (
              <ProjectItem {...project} key={project.id} />
            ))}
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Projects;
