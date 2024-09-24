import { BsGithub } from "react-icons/bs";
import { FaExternalLinkAlt } from "react-icons/fa";

import TabapayThumbnail from "../assets/images/tabapay-thumbnail.png";
import { Element } from "react-scroll";

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
            <div className="projects__card">
              <div className="projects__card-image">
                <img src={TabapayThumbnail} alt="Tabapay website" />
              </div>
              <div className="projects__card-info">
                <h1 className="projects__project-title">TabaPay.com</h1>

                <p className="projects__project-description">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non
                  dolorem sint iure hic nostrum nulla sed! Voluptas amet,
                  adipisci sit dolorem inventore quae accusamus error doloribus
                  fuga quidem accusantium quas.
                </p>
                <div className="projects__project-tech">
                  <span className="projects__project-tech-badge">HTML</span>
                  <span className="projects__project-tech-badge">CSS</span>
                  <span className="projects__project-tech-badge">SCSS</span>
                  <span className="projects__project-tech-badge">
                    javascript
                  </span>
                  <span className="projects__project-tech-badge">
                    typescript
                  </span>
                </div>
                <div className="projects__project-action-btns">
                  <a
                    href="https://tabapay.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
            </div>
            <div className="projects__card">
              <div className="projects__card-image">
                <img src={TabapayThumbnail} alt="Tabapay website" />
              </div>
              <div className="projects__card-info">
                <h1 className="projects__project-title">TabaPay.com</h1>

                <p className="projects__project-description">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non
                  dolorem sint iure hic nostrum nulla sed! Voluptas amet,
                  adipisci sit dolorem inventore quae accusamus error doloribus
                  fuga quidem accusantium quas.
                </p>
                <div className="projects__project-tech">
                  <span className="projects__project-tech-badge">HTML</span>
                  <span className="projects__project-tech-badge">CSS</span>
                  <span className="projects__project-tech-badge">SCSS</span>
                  <span className="projects__project-tech-badge">
                    javascript
                  </span>
                  <span className="projects__project-tech-badge">
                    typescript
                  </span>
                </div>
                <div className="projects__project-action-btns">
                  <a
                    href="https://tabapay.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo <FaExternalLinkAlt />
                  </a>
                  <a href="#">
                    See on github <BsGithub />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Projects;
