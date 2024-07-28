import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";

import Login from "./Login";
import SignUp from "./SignUp";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#ccc]">
      <div className="flex flex-col md:flex-row w-full h-screen md:h-[600px] max-w-4xl bg-[#f5f5f5] relative lg:rounded-lg shadow-lg overflow-hidden">
        {/* Login Form */}
        <div
          className={`flex items-center justify-center w-full h-1/2 md:w-1/2 md:h-full p-6 bg-[#f5f5f5] absolute transition-all duration-500 ease-in-out ${
            isLogin ? "left-0 top-0" : "-top-1/2 md:top-0 md:-left-1/2"
          }`}
        >
          <Login toggleForm={toggleForm} />
        </div>

        {/* Toggle Button */}
        <div
          className={`flex items-center justify-center w-full h-1/2 md:w-1/2 md:h-full p-6 bg-[#333333] absolute transition-all duration-500 ease-in-out ${
            isLogin
              ? "left-0 top-1/2 md:top-0 md:left-1/2"
              : "left-0 top-0 md:top-0 md:-left-0"
          }`}
        >
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-6 text-[#f5f5f5] duration-1000">
              {isLogin ? "Dont have an account ?" : "Already Have an Account?"}
            </h2>
            <button
              onClick={toggleForm}
              className="bg-[#f5f5f5] text-[#333333] font-bold py-2 px-4 rounded hover:bg-[#444444] hover:text-[#f5f5f5] focus:outline-none focus:shadow-outline"
            >
              {isLogin ? "Sign Up" : "Sign In"}
            </button>
          </div>
        </div>

        {/* Sign Up Form */}
        <div
          className={`flex items-center justify-center w-full h-1/2 md:w-1/2 md:h-full p-6 bg-[#f5f5f5] absolute transition-all duration-500 ease-in-out ${
            isLogin
              ? "left-0 top-full md:top-0 md:left-full"
              : "left-0 top-1/2 md:top-0 md:left-1/2"
          }`}
        >
          <SignUp toggleForm={toggleForm} />
        </div>
      </div>
      <a href="/">
        <div
          className={`fixed bottom-7 right-7 p-4 w-12 h-12 ${
            isLogin ? "md:bg-[#333333] bg-[#f5f5f5] " : "bg-[#333333]"
          }  rounded-full`}
        >
          <FaArrowLeft
            className={`bg-none ${
              isLogin ? "md:text-[#f5f5f5] text-[#333333]" : "text-[#f5f5f5]"
            }`}
          />
        </div>
      </a>
    </div>
  );
};

export default Auth;
