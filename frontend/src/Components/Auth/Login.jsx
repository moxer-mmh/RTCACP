import React, { useState } from "react";
import PropTypes from "prop-types";

function Login({ toggleForm }) {
  const [isForgotPassword, setIsForgotPassword] = useState(false);

  return (
    <div className="w-full max-w-xs">
      <h2 className="text-2xl font-semibold text-center mb-6 text-[#333333]">
        Login
      </h2>
      <form>
        <div className="mb-4">
          <label
            className="block text-[#333333] text-sm font-bold mb-2"
            htmlFor="login-username"
          >
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-[#333333] leading-tight focus:outline-none focus:shadow-outline border-[#333333] hover:border-[#c2c2c2] focus:border-[#c2c2c2] focus:ring-2 focus:ring-[#c2c2c2]"
            id="login-username"
            type="text"
            placeholder="Username"
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
          >
            <a href="/app">Login</a>
          </button>
        </div>
      </form>
    </div>
  );
}

Login.propTypes = {
  toggleForm: PropTypes.func.isRequired,
};

export default Login;
