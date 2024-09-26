import { Element } from "react-scroll";

import experienceData from "../data/experience";
import ExperienceItem from "../molecules/ExperienceItem";

const Experience = () => {
  return (
    <Element name="experiences">
      <section className="experiences">
        <div className="wrapper experiences__container">
          <div className="experiences__intro">
            <h1 className="experiences__title">My Experiences</h1>
            <p className="experiences__description">
              A journey of continuous learning and development, where each role
              has sharpened my skills and deepened my passion for crafting
              efficient, scalable solutions.
            </p>
          </div>
          <div className="experiences__list">
            {experienceData.map((experience) => (
              <ExperienceItem key={experience.id} {...experience} />
            ))}
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Experience;
