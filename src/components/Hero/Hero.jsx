import "./Hero.css";
import Me from "../../assets/evenProfile2.png";

const Hero = () => {
  return (
    <section className="hero">
      <article className="hero-left">
        <h1>Nice to meet you!</h1>
        <h1>
          I am <span>Even Salomon</span>.
        </h1>
        <h3>
          Based in Berlin, I'm a front-end developer who loves to build
          easy-to-use, user-friendly websites and applications.
        </h3>
      </article>
      <article className="hero-right">
        <img src={Me} alt="" />
      </article>
    </section>
  );
};

export default Hero;
