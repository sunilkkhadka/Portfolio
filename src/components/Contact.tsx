import GithubIcon from "../assets/svg/github.svg";
import TwitterIcon from "../assets/svg/twitter.svg";
import LinkedinIcon from "../assets/svg/linkedin.svg";
import Footer from "./Footer";

const Contact = () => {
  return (
    <section className="contact">
      <div className="wrapper contact__container">
        <div className="contact__intro">
          <h1 className="contact__title">Let's Connect</h1>
          <div className="contact__description">
            <p>
              Say hello at
              <span className="contact__email"> sunil.khadka001@gmail.com</span>
            </p>
            <p>
              For more info, here's my{" "}
              <a href="/Sunil_Khadka_CV.pdf" download="Sunil_Khadka_CV">
                <span className="contact__email">resume</span>
              </a>
            </p>
            <div className="contact__social-icons">
              <a
                href="https://www.linkedin.com/in/khadka-sunil/"
                target="blank"
              >
                <img src={LinkedinIcon} alt="Linkedin" />
              </a>
              <a href="https://github.com/sunilkkhadka/" target="blank">
                <img src={GithubIcon} alt="Github" />
              </a>
              <a href="#">
                <img src={TwitterIcon} alt="Twitter" />
              </a>
            </div>
          </div>
        </div>
        <div className="contact__form">
          <form>
            <div>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" />
            </div>
            <div>
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" />
            </div>
            <div>
              <label htmlFor="message">Message</label>
              <textarea id="message"></textarea>
            </div>
            <button>Submit</button>
          </form>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Contact;
