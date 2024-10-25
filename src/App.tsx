import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import "./assets/styles/main.scss";

import Hero from "./organisms/Hero";
// import Blog from "./organisms/Blog";
import Contact from "./organisms/Contact";
import Projects from "./organisms/Projects";
import BackToTop from "./organisms/BackToTop";
import TechStack from "./organisms/TechStack";
import Experience from "./organisms/Experience";

function App() {
  return (
    <main>
      <Hero />
      <TechStack />
      <Experience />
      <Projects />
      {/* <Blog /> */}
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
