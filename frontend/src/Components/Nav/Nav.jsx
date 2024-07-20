import "./Nav.css";
import logoReact from "../../assets/logo192.png";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <div className="navBar">
      <div className="titre">
        <img src={logoReact} alt="" className="logoReact" />
      </div>
      <nav className="liens">
        <a href="#" className="texteLiens">
          {" "}
          Home{" "}
        </a>
        <a href="#Blog" className="texteLiens">
          {" "}
          Blog{" "}
        </a>
        <a href="#features" className="texteLiens">
          {" "}
          Features{" "}
        </a>
        <a href="#feedback" className="texteLiens">
          {" "}
          Feedbacks{" "}
        </a>
      </nav>
      <div>
        <Link className="log" to={"/auth"}>
          Se connecter
        </Link>
      </div>
    </div>
  );
}
export default Nav;
