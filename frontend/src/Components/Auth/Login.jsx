import React, { useState } from "react";
import useLogin from "../../Hooks/useLogin";

function Login() {
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { loading, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(userName, password);
  };

  return (
    <div className="w-full max-w-xs">
      <h2 className="text-2xl font-semibold text-center mb-6 text-[#333333]">
        Login
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="block text-[#333333] text-sm font-bold mb-2"
            htmlFor="login-userName"
          >
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-[#333333] leading-tight focus:outline-none focus:shadow-outline border-[#333333] hover:border-[#c2c2c2] focus:border-[#c2c2c2] focus:ring-2 focus:ring-[#c2c2c2]"
            id="login-userName"
            type="text"
            placeholder="Username"
            value={userName}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-[#333333] text-sm font-bold mb-2"
            htmlFor="login-password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-[#333333] leading-tight focus:outline-none focus:shadow-outline border-[#333333] hover:border-[#c2c2c2] focus:border-[#c2c2c2] focus:ring-2 focus:ring-[#c2c2c2]"
            id="login-password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <a
          className="inline-block align-baseline font-bold text-sm text-[#333333] underline hover:text-[#c2c2c2]"
          href="#"
        >
          Forgot Password?
        </a>
        <div className="flex items-center justify-center mt-5 pt-5">
          <button
            className="bg-[#333333] hover:bg-[#c2c2c2] text-[#f5f5f5] hover:text-[#333333] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            disabled={loading}
          >
            {loading ? <span className="loading loading-spinner mx-auto"></span> : "Login"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
