import GithubIcon from "../assets/svg/github.svg";
import TwitterIcon from "../assets/svg/twitter.svg";
import LinkedinIcon from "../assets/svg/linkedin.svg";
import Footer from "./Footer";
import { Element } from "react-scroll";
import { useRef } from "react";

import { toast } from "react-toastify";

import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef<HTMLFormElement | string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_API_EMAIL_SERVICE_ID,
        import.meta.env.VITE_API_EMAIL_TEMPLATE_ID,
        formRef.current,
        {
          publicKey: import.meta.env.VITE_API_EMAIL_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          toast("👋 Thanks for reaching out. Do check your email");
          formRef.current.reset();
        },
        () => {
          toast(
            "🫢 Oops! Something went wrong. Please use the info on the left."
          );
          formRef.current.reset();
        }
      );
  };

  return (
    <Element name="contact">
      <section className="contact">
        <div className="wrapper contact__container">
          <div className="contact__intro">
            <h1 className="contact__title">Let's Connect</h1>
            <div className="contact__description">
              <p>
                Say hello at
                <span className="contact__email">
                  {" "}
                  sunil.khadka001@gmail.com
                </span>
              </p>
              <p>
                For more info, here's my{" "}
                <a
                  href="/Sunil_Khadka_CV.pdf"
                  download="Sunil_Khadka_CV"
                  onClick={() => toast(" 🥳 Hoping to hear from you soon!!")}
                >
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
            <form ref={formRef} onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" />
              </div>
              <div>
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" />
              </div>
              <div>
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message"></textarea>
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
        <Footer />
      </section>
    </Element>
  );
};

export default Contact;
