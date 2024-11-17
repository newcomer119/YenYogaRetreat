import React, { useState, useEffect } from "react";
import logo from "../assets/img/logos/logo.png";
import { Link } from "react-router-dom";
import { auth } from '../firebase'; // Import auth from your Firebase configuration

import Nav from "./Nav";
import NavMobile from "./NavMobile";

const Header = () => {
  const [header, setHeader] = useState(false);
  const [user, setUser] = useState(null); // State to hold user information

  useEffect(() => {
    // scroll event listener
    window.addEventListener("scroll", () => {
      window.scrollY > 24 ? setHeader(true) : setHeader(false);
    });

    // Monitor authentication state
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user); // Update user state
    });

    return () => {
      unsubscribe(); // Cleanup subscription on unmount
    };
  }, []);

  return (
    <header
      className={`${
        header ? "top-0" : "top-16"
      } fixed bg-white w-full max-w-[90%] my-3 rounded-md h-[80px] shadow-primary px-4 lg:px-6 
  z-20 transition-all duration-300 flex items-center justify-between`}
      style={{ left: "50%", transform: "translateX(-50%)" }}
    >
      <div className="flex items-center xl:gap-[50px] gap-[20px]">
        {/* Logo */}
        <a href="/">
          <img src={logo} alt="" className="w-32 h-auto p-2" />
        </a>
        {/* nav */}
        <div className="hidden lg:flex">
          <Nav />
        </div>
      </div>
      <div className="flex items-center">
        {/* buttons or user email */}
        <div className="flex gap-5">
          {user ? ( // Conditional rendering based on user state
            <span className="text-heading font-medium text-sm lg:text-base">
              Welcome, {user.email} {/* Display user email */}
            </span>
          ) : (
            <>
              <button className="text-heading font-medium text-sm lg:text-base hover:text-orange transition">
                <Link to="/sign-in">Sign In</Link>
              </button>
              <button
                className="btn btn-md lg:px-[30px] bg-orange-100 border border-orange text-orange font-medium text-sm 
              lg:text-base hover:bg-orange-200 hover:text-white transition"
              >
                <Link to="/sign-up">Sign Up</Link>
              </button>
            </>
          )}
        </div>
        {/* nav mobile */}
        <NavMobile />
      </div>
    </header>
  );
};

export default Header;