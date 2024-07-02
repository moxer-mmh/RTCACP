import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Nav from "./Components/Nav/Nav";
import Dashboard from "./Components/Dashboard/Dashboard";
import Profile from "./Components/Profile/Profile";
import Settings from "../Settings/Settings";
import "./Home.css";
function Home() {

  const [account, setAccount] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const accountInfo = localStorage.getItem('accountInfo');
    if (accountInfo) {
      setAccount(JSON.parse(accountInfo));
    } else {
      navigate('/auth', { replace: true });
    }
  }, [navigate]);

  if (!account) {
    return null; // or a loading spinner
  }
  
  return (
    <div className="home-container">
      <Nav />
      <main className="content-container">
        <Routes>
          <Route path="dashboard" element={<Dashboard account={account} />} />
          <Route path="profile" element={<Profile account={account} />} />
          <Route path="/" element={<Dashboard account={account} />} />
          <Route path="Settings/*" element={<Settings account={account} />} />
        </Routes>
      </main>
    </div>
  );
}

export default Home;