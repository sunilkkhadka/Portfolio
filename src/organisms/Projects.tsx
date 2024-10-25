import { useState } from "react";
import { motion } from "framer-motion";
import { Element } from "react-scroll";

import projectData from "../data/project";
import ProjectItem from "../molecules/ProjectItem";
import useWindowSize from "../hooks/useWindowSize";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

import { FaThList } from "react-icons/fa";
import { TfiLayoutGrid2Alt } from "react-icons/tfi";
import { TfiLayoutGrid3Alt } from "react-icons/tfi";

const Projects = () => {
  const [listStyle, setListStyle] = useState("list");
  const [sectionRef, isVisible] = useIntersectionObserver(0);
  const { windowSize: size } = useWindowSize();

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
          {size.width >= 1000 && (
            <div className="projects__list-style">
              <div
                className={`projects__list-style-item ${
                  listStyle === "list" && "active"
                }`}
                onClick={() => setListStyle("list")}
              >
                <FaThList />
              </div>
              <div
                className={`projects__list-style-item ${
                  listStyle === "grid" && "active"
                }`}
                onClick={() => setListStyle("grid")}
              >
                <TfiLayoutGrid2Alt />
              </div>
              <div
                className={`projects__list-style-item ${
                  listStyle === "block" && "active"
                }`}
                onClick={() => setListStyle("block")}
              >
                <TfiLayoutGrid3Alt />
              </div>
            </div>
          )}

          <div className={`projects__list ${listStyle}`}>
            {projectData.map((project, index) => (
              <ProjectItem
                isVisible={isVisible}
                key={project.id}
                {...project}
                delay={index * 1}
                listStyle={listStyle}
              />
            ))}
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Projects;
