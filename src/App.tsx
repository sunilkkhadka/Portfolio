import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./assets/styles/main.scss";
import BackToTop from "./organisms/BackToTop";
import Contact from "./organisms/Contact";
import Experience from "./organisms/Experience";
import Hero from "./organisms/Hero";
import Projects from "./organisms/Projects";
import TechStack from "./organisms/TechStack";

function App() {
  return (
    <main>
      <Hero />
      <TechStack />
      <Experience />
      <Projects />
      <Contact />
      <BackToTop />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </main>
  );
}

export default App;
