import { motion } from "framer-motion";

import { Image } from "../utils/images";
import { ExperienceProps } from "../types/portfolio.type";

const ExperienceItem = (props: ExperienceProps) => {
  const { title, duration, companyName, description, tools, isVisible, delay } =
    props;

  return (
    <motion.div
      className="experiences__item"
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut", delay: delay }}
    >
      <div className="experiences__info">
        <img
          src={Image.POINT}
          className="experiences__bullet-point"
          alt="Point"
        />
        <div className="experiences__date">{duration}</div>
        <div className="experiences__company-name">{title}</div>
        <div className="experiences__position">{companyName}</div>
        <div className="experiences__work-description">{description}</div>
        <div className="experiences__tech-badges">
          <p>Tools used:</p>
          {tools.map((tool, index) => (
            <img
              key={index}
              src={tool.icon}
              className="experiences__tech-badge"
              alt={tool.alt}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceItem;
