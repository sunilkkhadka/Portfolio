import { motion } from "framer-motion";

import { ProjectProps } from "../types/portfolio.type";

const ProjectItem = (props: ProjectProps) => {
  const { thumbnail, title, description, tags, links, isVisible, delay } =
    props;

  return (
    <motion.div
      className="projects__card"
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut", delay: delay }}
    >
      <div className="projects__card-image">
        <img src={thumbnail} alt="Tabapay website" />
      </div>
      <div className="projects__card-info">
        <h1 className="projects__project-title">{title}</h1>
        <p className="projects__project-description">{description}</p>
        <div className="projects__project-tech">
          {tags.map((tag, index) => (
            <span key={index} className="projects__project-tech-badge">
              {tag}
            </span>
          ))}
        </div>
        <div className="projects__project-action-btns">
          {links.map(
            (link, index) =>
              link.show && (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo <link.icon />
                </a>
              )
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectItem;
