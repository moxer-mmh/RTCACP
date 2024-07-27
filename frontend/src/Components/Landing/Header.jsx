import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { Link as Switch } from "react-router-dom";
import { FaXmark, FaBars } from "react-icons/fa6";

import logo from "../../assets/RTCACP-Logo.svg";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  });

  const navItems = [
    { link: "Home", path: "home" },
    { link: "Service", path: "service" },
    { link: "Feedback", path: "feedback" },
  ];

  return (
    <header className="w-full bg-[#f5f5f5] md:bg-transparent fixed top-0 left-0 right-0">
      <nav
        className={`py-4 lg:px-14 px-4${
          isSticky
            ? "sticky top-0 left-0 right-0 border bg-[#f5f5f5] duration-300"
            : ""
        }`}
      >
        <div className="flex justify-between items-center text-base gap-8">
          <a
            href="#"
            className="text-2xl font-semibold flex items-center space-x-3"
          >
            <img
              src={logo}
              alt="Logo"
              className="w-10 inline-block items-center"
            />
            <span className="text-[#333333]">RTCACP</span>
          </a>
          <ul className="hidden md:flex space-x-12">
            {navItems.map(({ link, path }) => (
              <Link
                to={path}
                spy={true}
                smooth={true}
                offset={-100}
                key={path}
                className="block text-base text-[#333333] hover:text-[#C2C2C2] font-bold cursor-pointer"
              >
                {link}
              </Link>
            ))}
          </ul>

          <div className="hidden lg:flex items-center space-x-12">
            <button className="bg-[#333333] text-[#f5f5f5] font-semibold py-2 px-4 transition-all duration-300 rounded hover:bg-[#c2c2c2] hover:text-[#333333] ">
              <Switch to="/auth">Login</Switch>
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-[#333333] focus:outline-none focus:text-[#444444]"
            >
              {isMenuOpen ? (
                <FaXmark className="h-6 w-6 " />
              ) : (
                <FaBars className="h-6 w-6 " />
              )}
            </button>
          </div>
        </div>

        <div
          className={`space-y-4 px-4 mt-16 py-7 ${
            isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
          }`}
        >
          {navItems.map(({ link, path }) => (
            <Link
              to={path}
              spy={true}
              smooth={true}
              offset={-100}
              key={path}
              className="block text-base text-[#333333] hover:text-[#C2C2C2] font-bold cursor-pointer"
            >
              {link}
            </Link>
          ))}
          <button className="bg-[#333333] text-[#f5f5f5] font-semibold py-2 px-4 transition-all duration-300 rounded hover:bg-[#c2c2c2] hover:text-[#333333]">
            <Switch to="/auth">Login</Switch>
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
