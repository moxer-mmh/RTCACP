import { useState, useEffect } from "react";
import "./Auth.css";
import api from "../../../api/accounts";
import Arrow from "../../../assets/arrow-left-solid.svg";

function Auth() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    const fetchAccounts = async () => {
      try {
        const response = await api.get("/accounts");
        setAccounts(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchAccounts();
  }, []);

  function handleSubmitSignIn(e) {
    e.preventDefault();

    const data = {
      email: email,
      password: password,
    };

    const account = accounts.find(
      (account) =>
        account.email === data.email && account.password === data.password
    );

    if (account) {
      alert("Account found");
    } else {
      alert("Account not found");
      setIsSignUp(true);
    }

    setEmail("");
    setPassword("");
  }

  function handleSubmitSignUp(e) {
    e.preventDefault();

    const data = {
      name: name,
      email: email,
      password: password,
    };

    const account = accounts.find((account) => account.email === data.email);

    if (account) {
      alert("Account already exists");
    } else {
      api
        .post("/accounts", data)
        .then((response) => {
          setAccounts([...accounts, response.data]);
          alert("Account created successfully");
        })
        .catch((error) => {
          console.error(error);
          alert("Error creating account");
        });
    }

    setName("");
    setEmail("");
    setPassword("");
    setIsSignUp(false);
  }

  function handleSignIn() {
    setIsSignUp(false);
  }

  function handleSignUp() {
    setIsSignUp(true);
  }

  return (
    <main className="auth">
      <div className={`auth-container ${isSignUp ? "signing-up" : ""}`}>
        <div className="container signin-container">
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
          </div>
          <div className="signup-msg">
            <p>Dont have an account?</p>
            <button onClick={handleSignUp}>Sign Up</button>
          </div>
        </div>
        <div className="container signup-container">
          <div className="signin-msg">
            <p>Already have an account?</p>
            <button onClick={handleSignIn}>Sign In</button>
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
      <div className="iconbutton">
        <a href="/">
          <img src={Arrow} alt="home" />
        </a>
      </div>
    </main>
  );
}

export default Auth;
