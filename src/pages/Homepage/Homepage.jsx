import Hero from "../../components/Hero/Hero";
import Navbar from "../../components/Navbar/Navbar";
import Projects from "../../components/Projects/Projects";
import Skills from "../../components/Skills/Skills";
import "./Homepage.css";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Navbar />
    </>
  );
};

export default Homepage;
