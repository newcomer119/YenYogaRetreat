// src/components/Header.js
import React, { useState, useEffect, useContext } from "react";
import logo from "../assets/img/logos/logo.png";
import { Link } from "react-router-dom";
import { auth } from '../firebase'; // Import auth from your Firebase configuration
import { CartContext } from '../context/CartContext'; // Import CartContext
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'; // Import the cart icon

import Nav from "./Nav";
import NavMobile from "./NavMobile";

const Header = () => {
  const [header, setHeader] = useState(false);
  const [user, setUser] = useState(null); // State to hold user information
  const { cart } = useContext(CartContext); // Access cart state from context

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

  const handleLogout = async () => {
    try {
      await auth.signOut(); // Sign out the user
      setUser(null); // Clear user state
    } catch (error) {
      console.error("Error signing out:", error); // Handle errors
    }
  };

  return (
    <header
      className={`${header ? "top-0" : "top-8 lg:top-16"} fixed bg-white my-3 rounded-md w-full z-20 transition-all duration-300 shadow-primary flex items-center justify-between gap-[20px] max-w-[90%] xxl:max-w-[70%] h-[50px] lg:h-[80px] px-4 lg:px-6`}
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
        {/* buttons or user email */}
        <div className="flex gap-5">
          {user ? ( // Conditional rendering based on user state
            <>
              <span className="text-heading font-medium text-sm lg:text-base">
                Welcome, {user.email} {/* Display user email */}
              </span>
              <div className="flex items-center">
                <Link to="/checkout" className="flex items-center">
                  <FontAwesomeIcon icon={faShoppingCart} className="w-6 h-6" /> {/* Cart icon */}
                  <span className="text-heading font-medium text-sm lg:text-base ml-1">
                    {cart.length} {/* Display number of items in cart */}
                  </span>
                </Link>
              </div>
              <button
                onClick={handleLogout} // Call handleLogout on click
                className="text-red-500 font-medium text-sm lg:text-base hover:text-red-700 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <button className="text-heading font-medium text-sm lg:text-base hover:text-orange transition">
                <Link to="/sign-in">Sign In</Link>
              </button>
              <button
                className="btn btn-md lg:px-[30px] bg-orange-100 border border-orange text-orange font-medium text-sm lg:text-base hover:bg-orange-200 hover:text-white transition"
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