import { useState, useEffect } from "react";
import "./Auth.css";
import api from "../../../api/accounts";

function Auth() {
  const [isSignIn, setIsSignIn] = useState(true);
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
      setIsSignIn(false);
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

    setName("");
    setEmail("");
    setPassword("");
    setIsSignUp(false);
    setIsSignIn(true);
  }

  function handleSignIn() {
    setIsSignIn(true);
    setIsSignUp(false);
  }

  function handleSignUp() {
    setIsSignIn(false);
    setIsSignUp(true);
  }

  return (
    <main className="auth">
      <div className="auth-container">
        {isSignIn && (
          <>
            <div className="signin-container">
              <h1>Sign In</h1>
              <form onSubmit={(e) => handleSubmitSignIn(e)}>
                <input
                  type="email"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button>Sign In</button>
              </form>
            </div>
            <div className="signup-msg">
              <p>Dont have an account?</p>
              <button onClick={() => handleSignUp()}>Sign Up</button>
            </div>
          </>
        )}
        {isSignUp && (
          <>
            <div className="signup-container">
              <h1>Sign Up</h1>
              <form onSubmit={(e) => handleSubmitSignUp(e)}>
                <input
                  type="text"
                  placeholder="Name"
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="email"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button>Sign Up</button>
              </form>
            </div>
            <div className="signin-msg">
              <p>Already have an account?</p>
              <button onClick={() => handleSignIn()}>Sign In</button>
            </div>
          </>
        )}
      </div>
      <a href="/">return</a>
    </main>
  );
}
export default Auth;
