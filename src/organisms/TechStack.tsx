import { motion } from "framer-motion";
import { Element } from "react-scroll";
import techStackData from "../data/techstack";
import useIntersectionObserver from "../hooks/useIntersectionObserver"; // import custom hook

const TechStack = () => {
  const [sectionRef, isVisible] = useIntersectionObserver(0.7); // use the custom hook

  return (
    <Element name="techstack">
      <section className="techstack" ref={sectionRef}>
        <div className="wrapper techstack__container">
          <div className="techstack__images">
            {techStackData.map((tech) => (
              <motion.img
                key={tech.alt}
                src={tech.icon}
                className="techstack__icon"
                alt={tech.alt}
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
            ))}
          </div>
          <motion.div
            className="techstack__intro"
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="techstack__title">My Tech Stack</h1>
            <p className="techstack__description">
              My skill set includes a variety of programming languages and
              frameworks, ensuring I can tackle front-end, back-end, and full
              stack development.
            </p>
          </motion.div>
        </div>
      </section>
    </Element>
  );
};

export default TechStack;
