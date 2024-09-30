import { Link } from "react-scroll";
import { toast } from "react-toastify";
import { FaDownload, FaPhoneFlip } from "react-icons/fa6";

import Navbar from "./Navbar";

import profile from "../assets/images/1697507006331.jpeg";
// import profile from "../assets/images/graduation.jpg";

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
            <a
              href="/Sunil_Khadka_CV.pdf"
              download="Sunil_Khadka_CV"
              className="hero__desktop-download-cv"
              onClick={() => toast(" 🥳 Hoping to hear from you soon!!")}
            >
              <span className="icon">
                <FaDownload />
              </span>
              Download CV
            </a>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="hero__desktop-contact-me"
            >
              <span className="icon">
                <FaPhoneFlip />
              </span>
              Contact Me
            </Link>
          </div>
          <div className="hero__action-btns">
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="hero__contact-me"
            >
              <span className="icon">
                <FaPhoneFlip />
              </span>
              Contact Me
            </Link>
            <a
              href="/Sunil_Khadka_CV.pdf"
              download="Sunil_Khadka_CV"
              className="hero__download-cv"
              onClick={() => toast(" 🥳 Hoping to hear from you soon!!")}
            >
              <span className="icon">
                <FaDownload />
              </span>
              Download CV
            </a>
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
