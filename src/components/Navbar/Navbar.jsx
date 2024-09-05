import "./Navbar.css";
import { FaSquareGithub, FaLinkedin, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <section className="navbar">
      <p>Even Salomon</p>
      <div className="navbar-right">
        <Link to="https://github.com/EvenSalomon1">
          <FaSquareGithub />
        </Link>
        <Link to="https://www.linkedin.com/in/even-salomon-0437851bb/">
          <FaLinkedin />
        </Link>
        <Link to="tel:+4915787323562">
          <FaPhone />
        </Link>
        <a href="mailto:even.salo@web.de" target="_blank">
          <MdEmail />
        </a>
      </div>
    </section>
  );
};

export default Navbar;
