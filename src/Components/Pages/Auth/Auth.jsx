import { useState, useEffect } from "react";
import "./Auth.css";
import api from "../../../api/accounts";
import Arrow from "../../../assets/arrow-left-solid.svg";
import useAxiosFetch from "../../../Hooks/useAxiosFetch";
import PropTypes from "prop-types";

const Popup = ({ message, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      e.preventDefault();
      onClose();
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div className="popup">
      <div className="popup-content">
        <p>{message}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

Popup.propTypes = {
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

function Auth() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [popupMessage, setPopupMessage] = useState("");
  const {
    data: accounts,
    fetchError,
    isLoading,
  } = useAxiosFetch(`${api.defaults.baseURL}/accounts`);

  function handleSubmitSignIn(e) {
    e.preventDefault();
    const account = accounts.find(
      (account) => account.email === email && account.password === password
    );
    if (account) {
      setPopupMessage("Sign in successful!");
    } else {
      setPopupMessage("Account not found. Please sign up.");
      setIsSignUp(!isSignUp);
    }
    setEmail("");
    setPassword("");
  }

  function handleSubmitSignUp(e) {
    e.preventDefault();
    const account = accounts.find((account) => account.email === email);
    if (account) {
      setPopupMessage("Account already exists");
      setIsSignUp(!isSignUp);
    } else {
      api
        .post("/accounts", { name, email, password })
        .then(() => {
          setPopupMessage("Account created successfully");
          setIsSignUp(!isSignUp);
        })
        .catch((error) => {
          console.error(error);
          setPopupMessage("Error creating account");
        });
    }
    setName("");
    setEmail("");
    setPassword("");
  }

  function handleForgotPassword(e) {
    e.preventDefault();
    //password reset logic here
    setPopupMessage("Password reset link sent to your email");
    setIsForgotPassword(false);
  }

  return (
    <main className="auth">
      {isLoading && <p>Loading...</p>}
      {!isLoading && fetchError && <p style={{ color: "red" }}>{fetchError}</p>}
      {!isLoading && !fetchError && (
        <div className={`auth-container ${isSignUp ? "signing-up" : ""}`}>
          <div className="container signin-container">
            {!isForgotPassword ? (
              <div className="signin">
                <h1>Sign In</h1>
                <form onSubmit={handleSubmitSignIn}>
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button type="submit">Sign In</button>
                </form>
                <button onClick={() => setIsForgotPassword(true)}>
                  Forgot Password?
                </button>
              </div>
            ) : (
              <div className="forgot-password">
                <h1>Forgot Password</h1>
                <form onSubmit={handleForgotPassword}>
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button type="submit">Reset Password</button>
                </form>
                <button onClick={() => setIsForgotPassword(false)}>
                  Back to Sign In
                </button>
              </div>
            )}
            <div className="signup-msg">
              <p>Dont have an account?</p>
              <button onClick={() => setIsSignUp(true)}>Sign Up</button>
            </div>
          </div>
          <div className="container signup-container">
            <div className="signin-msg">
              <p>Already have an account?</p>
              <button onClick={() => setIsSignUp(false)}>Sign In</button>
            </div>
            <div className="signup">
              <h1>Sign Up</h1>
              <form onSubmit={handleSubmitSignUp}>
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Sign Up</button>
              </form>
            </div>
          </div>
        </div>
      )}
      <div className="iconbutton">
        <a href="/">
          <img src={Arrow} alt="home" />
        </a>
      </div>
      {popupMessage && (
        <Popup message={popupMessage} onClose={() => setPopupMessage("")} />
      )}
    </main>
  );
}

export default Auth;
