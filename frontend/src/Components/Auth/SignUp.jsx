import React from "react";
import PropTypes from "prop-types";

function SignUp({ toggleForm }) {
  return (
    <div className="w-full max-w-xs">
      <h2 className="text-2xl font-semibold text-center mb-6 text-[#333333]">
        Sign Up
      </h2>
      <form className="flex flex-row flex-wrap ">
        <div className="w-1/2 flex-grow lg:w-5/12 mb-1 p-1 lg:p-2 lg:mb-4">
          <label
            className="block text-[#333333] text-sm font-bold mb-2"
            htmlFor="signup-fullname"
          >
            FullName
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="signup-fullname"
            type="text"
            placeholder="FullName"
          />
        </div>
        <div className="w-1/2 flex-grow lg:w-5/12 mb-1 p-1 lg:p-2 lg:mb-4">
          <label
            className="block text-[#333333] text-sm font-bold mb-2"
            htmlFor="signup-username"
          >
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="signup-username"
            type="text"
            placeholder="Username"
          />
        </div>
        <div className="w-full flex-grow lg:p-2 mb-1 p-1 lg:mb-4 ">
          <label
            className="block text-[#333333] text-sm font-bold mb-2"
            htmlFor="signup-email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="signup-email"
            type="email"
            placeholder="Email"
          />
        </div>
        <div className="w-1/2 flex-grow lg:w-5/12 mb-1 p-1 lg:p-2 lg:mb-6">
          <label
            className="block text-[#333333] text-sm font-bold mb-2"
            htmlFor="signup-password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="signup-password"
            type="password"
            placeholder="Password"
          />
        </div>
        <div className="w-1/2 flex-grow lg:w-5/12 mb-1 p-1 lg:p-2 lg:mb-6">
          <label
            className="block text-[#333333] text-sm font-bold mb-2"
            htmlFor="signup-confirmpassword"
          >
            ConfirmPassword
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="signup-confirmpassword"
            type="password"
            placeholder="ConfirmPassword"
          />
        </div>
        <div className="w-1/2 flex-grow flex justify-center align-middle mb-1 p-1 lg:mb-4">
          <label className=" text-[#333333] font-bold">Gender</label>
        </div>
        <div className="w-1/2 flex-grow flex justify-around align-middle mb-1 p-1 lg:mb-6">
          <div className="flex items-center">
            <input
              className="mr-2 leading-tight"
              id="signup-gender-male"
              type="checkbox"
            />
            <label
              htmlFor="signup-gender-male"
              className="text-[#333333] font-bold"
            >
              Male
            </label>
          </div>
          <div className="flex items-center">
            <input
              className="mr-2 leading-tight"
              id="signup-gender-female"
              type="checkbox"
            />
            <label
              htmlFor="signup-gender-female"
              className="text-[#333333] font-bold"
            >
              Female
            </label>
          </div>
        </div>
        <div className="w-full flex-grow flex justify-center align-middle mb-1 p-1 lg:mb-4">
          <button
            className="bg-[#333333] text-[#f5f5f5] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}

SignUp.propTypes = {
  toggleForm: PropTypes.func.isRequired,
};

export default SignUp;
