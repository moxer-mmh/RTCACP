import { Link  } from "react-router-dom";
import "./Nav.css";

function Nav() {

  return (
    <nav className="settings-nav">
      <ul>
        <li><Link to="/home/settings/account">Account</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;