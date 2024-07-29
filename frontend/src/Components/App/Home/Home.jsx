import React from "react";
import { TbLogout2 } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { BiConversation } from "react-icons/bi";
import { IoHomeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex h-screen">
      <nav className="flex flex-col justify-between items-center h-full md:w-1/12 w-1/6 bg-[#ccc] p-9">
        <div className="flex flex-col items-center">
          <div className="mb-9">
            <Link to="/app">
              <IoHomeOutline className="text-[#333333]" size={30} />
            </Link>
          </div>
          <div className="mb-9">
            <Link to="/app/profile">
              <CgProfile className="text-[#333333]" size={30} />
            </Link>
          </div>
          <div className="mb-9">
            <Link to="/app/conversations">
              <BiConversation className="text-[#333333]" size={30} />
            </Link>
          </div>

          <div className="mb-9">
            <Link to="/app/settings">
              <IoSettingsOutline className="text-[#333333]" size={30} />
            </Link>
          </div>
        </div>
        <Link to="/">
          <TbLogout2 className="text-[#333333]" size={30} />
        </Link>
      </nav>
      <div className="flex justify-center items-center h-full flex-grow w-5/6 bg-[#f5f5f5]">
        <h1 className="text-[#333333] font-bold text-2xl">
          Welcome To Our App
        </h1>
      </div>
    </div>
  );
}

export default Home;
