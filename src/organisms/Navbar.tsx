import { useState } from "react";
import { Link } from "react-scroll";
import { toast } from "react-toastify";

import { BsGithub } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { FaDownload } from "react-icons/fa6";

import GithubIcon from "../assets/svg/github.svg";
import LinkedinIcon from "../assets/svg/linkedin.svg";

import Logo from "../assets/images/sunilkhadkalogo.png";

import useWindowSize from "../hooks/useWindowSize";

const Navbar = () => {
  const { windowSize: size } = useWindowSize();

  return (
    <header className="navbar">
      <div className="wrapper">
        <nav className="navbar__container">
          <img className="navbar__logo" src={Logo} alt="Sunil Khadka Logo" />
          {size.width > 768 ? <DesktopNav /> : <MobileNav />}
        </nav>
      </div>
    </header>
  );
};

const DesktopNav = () => {
  return (
    <>
      <div className="navbar__desktop">
        <ul className="navbar__desktop-links">
          <li>
            <Link to="techstack" smooth={true} duration={500}>
              Tech Stack
            </Link>
          </li>
          <li>
            <Link to="experiences" smooth={true} duration={500}>
              Experience
            </Link>
          </li>
          <li>
            <Link to="projects" smooth={true} duration={500}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar__desktop-social-icons">
        <a
          href="https://www.linkedin.com/in/khadka-sunil/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiLinkedin className="navbar__desktop-social-icon" />
        </a>
        <a
          href="https://github.com/sunilkkhadka/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsGithub className="navbar__desktop-social-icon" />
        </a>
        <a
          href="/Sunil_Khadka_CV.pdf"
          download="Sunil_Khadka_CV"
          className="navbar__desktop-download-cv"
          onClick={() => toast(" 🥳 Hoping to hear from you soon!!")}
        >
          <span className="navbar__desktop-download-icon">
            <FaDownload />
          </span>
          Download CV
        </a>
      </div>
    </>
  );
};

const MobileNav = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <div className="navbar__mobile">
      <div
        // className="navbar__hamburger"
        className={`${
          isMobileNavOpen ? "navbar__hamburger open" : "navbar__hamburger"
        }`}
        onClick={() => setIsMobileNavOpen((prev) => !prev)}
      >
        <div></div>
        <div></div>
      </div>
      <ul
        className={`${
          isMobileNavOpen ? "navbar__mobile-links open" : "navbar__mobile-links"
        }`}
      >
        <li>
          <Link to="techstack" smooth={true} duration={500}>
            Tech Stack
          </Link>
        </li>
        <li>
          <Link to="experiences" smooth={true} duration={500}>
            Experience
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
        <li className="navbar__mobile-links-socials">
          <a
            href="https://www.linkedin.com/in/khadka-sunil/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={LinkedinIcon} alt="linkedin" />
          </a>
          <a
            href="https://github.com/sunilkkhadka/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={GithubIcon} alt="github" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
