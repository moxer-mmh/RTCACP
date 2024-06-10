import "./Header.css";
import logoReact from "../../Assets/logo192.png";
import teamWork from "../../Assets/teamWork.png";

function Header() {
  return (
    <header className="Header">
      <div className="navBar">
        <div className="titre">
          <img src={logoReact} alt="" className="logoReact" />
        </div>
        <nav className="liens">
          <a href="#" className="texteLiens">
            {" "}
            Home{" "}
          </a>
          <a href="#" className="texteLiens">
            {" "}
            Blog{" "}
          </a>
          <a href="#" className="texteLiens">
            {" "}
            News{" "}
          </a>
          <a href="#" className="texteLiens">
            {" "}
            Feedbacks{" "}
          </a>
        </nav>
        <div>
          <button className="log">Se connecter</button>
        </div>
      </div>

      <div className="teamWork">
          <section className="laSection">
            <div className="titleSec">
              Bridging teams together. one message at a time
            </div>
            <p>
              Stay connected and collaborate in real-time across web, mobile,
              and desktop with our all-in-one platform.
            </p>
            <button className="getStarted">Get Started</button>

          </section>

          <div>
            <img src={teamWork} alt="Team Work" />
          </div>
        
      </div>
    </header>
  );
}

export default Header;
