import React, { useState, useEffect } from "react";
import logo from "../assets/img/logos/logo.png";

import Nav from "./Nav";
import NavMobile from "./NavMobile";

const Header = () => {
  const [header, setHeader] = useState(false);

  useEffect(() => {
    // scroll event listener
    window.addEventListener("scroll", () => {
      window.scrollY > 24 ? setHeader(true) : setHeader(false);
    });
  }, []);

  return (
    <header
      className={`${header ? "top-0" : "top-8 lg:top-16"} fixed bg-white my-3 rounded-md w-full z-20 transition-all duration-300  shadow-primary flex items-center justify-between
        gap-[20px] max-w-[90%] 
        h-[50px] lg:h-[80px] px-4 lg:px-6 
        `}
      style={{ left: "50%", transform: "translateX(-50%)" }}
    >
      <div className="flex items-center xl:gap-[50px] gap-[20px]">
        {/* Logo */}
        <a href="/">
          <img src={logo} alt="" className="w-20 lg:w-32 h-auto lg:p-2" />
        </a>
        {/* nav */}
        <div className="hidden lg:flex">
          <Nav />
        </div>
      </div>
      <div className="flex items-center">
        {/* buttons */}
        <div className="flex gap-5">
          <button className="h-[35px] lg:h-[50px] text-heading font-medium text-sm lg:text-base hover:text-orange transition">
            Sign In
          </button>
          <button
            className="btn btn-sm lg:btn-md m-auto bg-orange-100 border border-orange text-orange font-medium text-sm 
          lg:text-base hover:bg-orange-200 hover:text-white transition"
          >
            Sign Up
          </button>
        </div>
        {/* nav mobile */}
        <NavMobile />
      </div>
    </header>
  );
};

export default Header;
