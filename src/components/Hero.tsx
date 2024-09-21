import { FaDownload, FaPhoneFlip } from "react-icons/fa6";

import GithubIcon from "../assets/svg/github.svg";
import LinkedinIcon from "../assets/svg/linkedin.svg";

import Navbar from "./Navbar";

import profile from "../assets/images/1697507006331.jpeg";

const Hero = () => {
  return (
    <section className="hero">
      <Navbar />
      <div className="wrapper hero__container">
        <div className="hero__intro">
          <h1 className="hero__title">
            HI, I AM <br /> <span className="big-text">SUNIL KHADKA </span>{" "}
            <br /> <div className="underline-text">A Full Stack Engineer.</div>
          </h1>
          <p className="hero__description">
            I'm a full stack software engineer specializing in React and Golang,
            crafting scalable and efficient web applications. With a passion for
            clean code and innovative solutions, I aim to bring your ideas to
            life through seamless digital experiences.
          </p>
          <div className="hero__desktop-action-btns">
            <button className="hero__desktop-download-cv">
              <span className="icon">
                <FaDownload />
              </span>
              Download CV
            </button>
            <div className="hero__desktop-social-icons">
              <img src={LinkedinIcon} alt="" />
              <img src={GithubIcon} alt="" />
            </div>
          </div>
          <div className="hero__action-btns">
            <button className="hero__contact-me">
              <span className="icon">
                <FaPhoneFlip />
              </span>
              Contact Me
            </button>
            <button className="hero__download-cv">
              <span className="icon">
                <FaDownload />
              </span>
              Download CV
            </button>
          </div>
        </div>
        <div className="hero__profile-img">
          <img src={profile} alt="Profile Image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
