import CssIcon from "../assets/svg/css.svg";
import HtmlIcon from "../assets/svg/html.svg";
import SassIcon from "../assets/svg/sass.svg";
import ReactIcon from "../assets/svg/react.svg";
import TypescriptIcon from "../assets/svg/typescript.svg";
import JavascriptIcon from "../assets/svg/javascript.svg";
import GolangIcon from "../assets/svg/golang.svg";
import MysqlIcon from "../assets/svg/mysql.svg";
import DockerIcon from "../assets/svg/docker.svg";
import JenkinsIcon from "../assets/svg/jenkins.svg";
import PostmanIcon from "../assets/svg/postman.svg";

import PointIcon from "../assets/svg/point.svg";

import ReactQueryIcon from "../assets/svg/react-query.svg";

const Experience = () => {
  return (
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
          <div className="experiences__item">
            <div className="experiences__info">
              <img
                src={PointIcon}
                className="experiences__bullet-point"
                alt="Point"
              />
              <div className="experiences__date">Jul 2022 - Apr 2024</div>
              <div className="experiences__company-name">Software Engineer</div>
              <div className="experiences__position">
                Machnet Technologies Inc.
              </div>
              <div className="experiences__work-description">
                Developed user interfaces for management dashboards and client
                onboarding using React.js and TypeScript. Boosted performance by
                integrating RESTful APIs with React Query, reducing API calls.
                Contributed to planning and documenting client features,
                ensuring clear requirements and efficient development.
              </div>
              <div className="experiences__tech-badges">
                Tools used:
                <img
                  src={ReactIcon}
                  className="experiences__tech-badge"
                  alt="React js"
                />
                <img
                  src={GolangIcon}
                  className="experiences__tech-badge"
                  alt="Golang"
                />
                <img
                  src={MysqlIcon}
                  className="experiences__tech-badge"
                  alt="MySQL"
                />
                <img
                  src={ReactQueryIcon}
                  className="experiences__tech-badge"
                  alt="React Query"
                />
                <img
                  src={JavascriptIcon}
                  className="experiences__tech-badge"
                  alt="JavaScript"
                />
                <img
                  src={TypescriptIcon}
                  className="experiences__tech-badge"
                  alt="TypeScript"
                />
                <img
                  src={SassIcon}
                  className="experiences__tech-badge"
                  alt="Sass"
                />
                <img
                  src={DockerIcon}
                  className="experiences__tech-badge"
                  alt="Docker"
                />
                <img
                  src={JenkinsIcon}
                  className="experiences__tech-badge"
                  alt="Jenkins"
                />
                <img
                  src={PostmanIcon}
                  className="experiences__tech-badge"
                  alt="Postman"
                />
              </div>
            </div>
          </div>
          <div className="experiences__item">
            <div className="experiences__info">
              <img
                src={PointIcon}
                className="experiences__bullet-point"
                alt="Point"
              />
              <div className="experiences__date">Apr 2022 - Jul 2022</div>
              <div className="experiences__company-name">
                Software Engineer Trainee
              </div>
              <div className="experiences__position">
                Machnet Technologies Inc.
              </div>
              <div className="experiences__work-description">
                Developed static web pages using HTML, CSS, SCSS, and
                JavaScript. Implemented responsive designs with media queries,
                ensuring adaptability across all screen sizes. Optimized loading
                speed by 70% through image compression, format conversion, and
                lazy-loading. Integrated Google Analytics via Tag Manager to
                track traffic and user activity.
              </div>
              <div className="experiences__tech-badges">
                Tools used:
                <img
                  src={HtmlIcon}
                  className="experiences__tech-badge"
                  alt="HTML"
                />
                <img
                  src={CssIcon}
                  className="experiences__tech-badge"
                  alt="CSS"
                />
                <img
                  src={JavascriptIcon}
                  className="experiences__tech-badge"
                  alt="JavaScript"
                />
                <img
                  src={TypescriptIcon}
                  className="experiences__tech-badge"
                  alt="TypeScript"
                />
                <img
                  src={SassIcon}
                  className="experiences__tech-badge"
                  alt="Sass"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
