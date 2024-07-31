import React, { useState } from "react";
import useSignup from "../../Hooks/useSignup";

function SignUp() {
  const [inputs, setInputs] = useState({
    fullName: "",
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const { loading, signup } = useSignup();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  const handlSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  };

  return (
    <div className="w-full max-w-xs">
      <h2 className="text-2xl font-semibold text-center mb-6 text-[#333333]">
        Sign Up
      </h2>
      <form onSubmit={handlSubmit} className="flex flex-row flex-wrap ">
        <div className="w-1/2 flex-grow lg:w-5/12 mb-1 p-1 lg:p-2 lg:mb-4">
          <label
            className="block text-[#333333] text-sm font-bold mb-2"
            htmlFor="signup-fullName"
          >
            FullName
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="signup-fullName"
            type="text"
            placeholder="FullName"
            value={inputs.fullName}
            onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
          />
        </div>
        <div className="w-1/2 flex-grow lg:w-5/12 mb-1 p-1 lg:p-2 lg:mb-4">
          <label
            className="block text-[#333333] text-sm font-bold mb-2"
            htmlFor="signup-userName"
          >
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="signup-userName"
            type="text"
            placeholder="Username"
            value={inputs.userName}
            onChange={(e) => setInputs({ ...inputs, userName: e.target.value })}
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
            value={inputs.email}
            onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
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
            value={inputs.password}
            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
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
            value={inputs.confirmPassword}
            onChange={(e) =>
              setInputs({ ...inputs, confirmPassword: e.target.value })
            }
          />
        </div>
        <div className="w-1/2 flex-grow flex justify-center align-middle mb-1 p-1 lg:mb-4">
          <label className=" text-[#333333] font-bold">Gender</label>
        </div>
        <div className="w-1/2 flex-grow flex justify-around align-middle mb-1 p-1 lg:mb-6">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="male"
              name="gender"
              value="male"
              checked={inputs.gender === "male"}
              onChange={handleChange}
              className="checkbox mr-2 border-[#333333]  cursor-pointer"
            />
            <label htmlFor="male" className="text-[#333333]">
              Male
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="female"
              name="gender"
              value="female"
              checked={inputs.gender === "female"}
              onChange={handleChange}
              className="checkbox mx-2 border-[#333333]  cursor-pointer"
            />
            <label htmlFor="female" className="text-[#333333]">
              Female
            </label>
          </div>
        </div>
        <div className="w-full flex-grow flex justify-center align-middle mb-1 p-1 lg:mb-4">
          <button
            className="bg-[#333333] text-[#f5f5f5] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            disabled={loading}
          >
            {loading ? (
              <span className="loading loading-spinner mx-auto"></span>
            ) : (
              "Sign Up"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
