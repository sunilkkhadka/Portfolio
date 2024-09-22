import { useState } from "react";
import useWindowSize from "../hooks/useWindowSize";

import { BsGithub } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";

import GithubIcon from "../assets/svg/github.svg";
import LinkedinIcon from "../assets/svg/linkedin.svg";

const Navbar = () => {
  const { windowSize: size } = useWindowSize();

  return (
    <header className="navbar">
      <div className="wrapper">
        <nav className="navbar__container">
          <h1 className="navbar__logo">CODE</h1>
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
            <a href="#">Work</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
      <div className="navbar__desktop-social-icons">
        <a href="https://www.linkedin.com/in/khadka-sunil/" target="blank">
          <SiLinkedin className="navbar__desktop-social-icon" />
        </a>
        <a href="https://github.com/sunilkkhadka/" target="blank">
          <BsGithub className="navbar__desktop-social-icon" />
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
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Pricing</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
        <li>
          <a href="#">Jobs</a>
        </li>
        <li>
          <a href="#">Pages</a>
        </li>
        <li className="navbar__mobile-links-socials">
          <a href="https://www.linkedin.com/in/khadka-sunil/" target="blank">
            <img src={LinkedinIcon} alt="linkedin" />
          </a>
          <a href="https://github.com/sunilkkhadka/" target="blank">
            <img src={GithubIcon} alt="github" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
