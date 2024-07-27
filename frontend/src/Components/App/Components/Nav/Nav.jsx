import { Link ,useNavigate } from "react-router-dom";
import "./Nav.css";

function Nav() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('accountInfo');
    navigate('/auth');
  };

  return (
    <nav className="nav">
      <ul>
        <li><Link to="/home/dashboard">Dashboard</Link></li>
        <li><Link to="/home/profile">Profile</Link></li>
        <li><Link to="/home/settings">Settings</Link></li>
      </ul>
      <button onClick={handleLogout}>Logout</button>
    </nav>
  );
}

export default Nav;