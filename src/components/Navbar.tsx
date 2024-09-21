import { useState } from "react";
import useWindowSize from "../hooks/useWindowSize";
import { FaDownload, FaPhoneFlip } from "react-icons/fa6";

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
      <div>
        <button className="navbar__desktop-contact-me">
          <span className="icon">
            <FaPhoneFlip />
          </span>
          Contact Me
        </button>
        <button className="navbar__desktop-download-cv">
          <span className="icon">
            <FaDownload />
          </span>
          Donwload CV
        </button>
      </div>
    </>
  );
};

const MobileNav = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <div className="navbar__mobile">
      <div
        className="navbar__hamburger"
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
      </ul>
    </div>
  );
};

export default Navbar;
