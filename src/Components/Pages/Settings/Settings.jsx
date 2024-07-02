import PropTypes from "prop-types";
import Nav from "./Components/Nav/Nav";
import { Route, Routes } from "react-router-dom";
import Account from "./Components/Account/Account";
import "./Settings.css";
function Settings({account}) {
  return (
    <div className="settings">
      <Nav />
      <main className="settings-container">
        <h1>Settings</h1>
        <Routes>
          <Route path="account" element={<Account account={account} />} />
          <Route path="/" element={<Account account={account} />} />
        </Routes>
      </main>
    </div>
  );
}

Settings.propTypes = {
  account: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};

export default Settings;
