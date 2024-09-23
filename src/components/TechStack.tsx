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
import AWSIcon from "../assets/svg/aws.svg";
import ReduxIcon from "../assets/svg/redux.svg";
import LinuxIcon from "../assets/svg/linux.svg";
import { Element } from "react-scroll";

const TechStack = () => {
  return (
    <Element name="techstack">
      <section className="techstack">
        <div className="wrapper techstack__container">
          <div className="techstack__images">
            <img src={ReactIcon} className="techstack__icon" alt="React js" />
            <img src={GolangIcon} className="techstack__icon" alt="Golang" />
            <img
              src={TypescriptIcon}
              className="techstack__icon"
              alt="TypeScript"
            />
            <img src={SassIcon} className="techstack__icon" alt="Sass" />
            <img src={MysqlIcon} className="techstack__icon" alt="MySQL" />
            <img src={ReduxIcon} className="techstack__icon" alt="Redux" />
            <img src={HtmlIcon} className="techstack__icon" alt="HTML" />
            <img src={CssIcon} className="techstack__icon" alt="CSS" />
            <img
              src={JavascriptIcon}
              className="techstack__icon"
              alt="JavaScript"
            />
            <img src={DockerIcon} className="techstack__icon" alt="Docker" />
            <img src={JenkinsIcon} className="techstack__icon" alt="Jenkins" />
            <img src={PostmanIcon} className="techstack__icon" alt="Postman" />
            <img src={LinuxIcon} className="techstack__icon" alt="Linux" />
            <img src={AWSIcon} className="techstack__icon" alt="AWS" />
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
