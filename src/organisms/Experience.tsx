import { Element } from "react-scroll";
import { motion } from "framer-motion";

import experienceData from "../data/experience";
import ExperienceItem from "../molecules/ExperienceItem";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const Experience = () => {
  const [sectionRef, isVisible] = useIntersectionObserver(0.3);

  return (
    <Element name="experiences">
      <section className="experiences" ref={sectionRef}>
        <div className="wrapper experiences__container">
          <motion.div
            className="experiences__intro"
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="experiences__title">My Experiences</h1>
            <p className="experiences__description">
              A journey of continuous learning and development, where each role
              has sharpened my skills and deepened my passion for crafting
              efficient, scalable solutions.
            </p>
          </motion.div>
          <div className="experiences__list">
            {experienceData.map((experience, index) => (
              <ExperienceItem
                key={experience.id}
                {...experience}
                isVisible={isVisible}
                delay={index * 0.4}
              />
            ))}
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Experience;
