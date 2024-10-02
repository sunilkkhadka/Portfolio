import { motion } from "framer-motion";
import { Element } from "react-scroll";

import projectData from "../data/project";
import ProjectItem from "../molecules/ProjectItem";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const Projects = () => {
  const [sectionRef, isVisible] = useIntersectionObserver(0.3);

  return (
    <Element name="projects">
      <section className="projects" ref={sectionRef}>
        <div className="wrapper projects__container">
          <motion.div
            className="projects__intro"
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="projects__intro-title">Featured Projects</h1>
            <p className="projects__intro-description">
              Here are some of the selected projects that showcase my passion
              for front-end development.
            </p>
          </motion.div>
          <div className="projects__list">
            {projectData.map((project, index) => (
              <ProjectItem
                isVisible={isVisible}
                key={project.id}
                {...project}
                delay={index * 1}
              />
            ))}
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Projects;
