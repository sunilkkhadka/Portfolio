import "./assets/styles/main.scss";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import Experience from "./components/Experience";

function App() {
  return (
    <main>
      <Hero />
      <TechStack />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}

export default App;
