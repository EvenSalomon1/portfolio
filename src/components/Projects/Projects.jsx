import "./Projects.css";
import { Link } from "react-router-dom";
import Eshop from "../../../public/Img/eshop";

const Projects = () => {
  return (
    <section className="projects">
      <h1>Projects</h1>
      <div className="projects-grid">
        <article>
          {/* <img src="../../../public/img/GreenMarket.png" alt="GreenMarket" /> */}
          <h3>Green Market</h3>
          <div>
            <Link to="https://github.com/MorphDE/GreenMarket">
              <p>GitHub Link</p>
            </Link>
            <Link to="https://greenmarket.tobias-tischer.de/">
              <p>Live Version</p>
            </Link>
          </div>
        </article>
        <article>
          {/* <img src="../../../public/Img/eshop.png" alt="" /> */}
          <Eshop />
          <h3>E-Shop</h3>
          <div>
            <Link to="https://github.com/EvenSalomon1/E-Shop">
              <p>GitHub Link</p>
            </Link>
            <Link to="https://e-shop-weld-five.vercel.app/">
              <p>Live Version</p>
            </Link>
          </div>
        </article>
        <article>
          <img src="../../../public/Img/tasty.png" alt="Tasty App" />
          <h3>Tasty</h3>
          <div>
            <Link to="https://github.com/EvenSalomon1/Tasty-Aktuell">
              <p>GitHub Link</p>
            </Link>
            <Link to="https://tasty-aktuell.vercel.app">
              <p>Live Version</p>
            </Link>
          </div>
        </article>
        <article>
          {/* <img src="../../../public/img/pokemon_.png" alt="" /> */}
          <h3>Pokémon</h3>
          <div>
            <Link to="https://github.com/Zied1981/PokeDex_Project">
              <p>GitHub Link</p>
            </Link>
            <Link to="https://pokemon-b5uwnv2k4-evensalomon1s-projects.vercel.app/">
              <p>Live Version</p>
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Projects;
