import { Element } from "react-scroll";
import techStackData from "../data/techstack";

const TechStack = () => {
  return (
    <Element name="techstack">
      <section className="techstack">
        <div className="wrapper techstack__container">
          <div className="techstack__images">
            {techStackData.map((tech) => (
              <img
                src={tech.icon}
                className="techstack__icon"
                alt={tech.alt}
                key={tech.alt}
              />
            ))}
          </div>
          <div className="techstack__intro">
            <h1 className="techstack__title">My Tech Stack</h1>
            <p className="techstack__description">
              My skill set includes a variety of programming languages and
              frameworks, ensuring I can tackle front-end, back-end, and full
              stack development.
            </p>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default TechStack;
