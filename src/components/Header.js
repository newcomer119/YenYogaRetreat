// src/components/Header.js
import React, { useState, useEffect } from "react";
import logo from "../assets/img/logos/logo-og.png";
import { Link } from "react-router-dom";
import { auth } from "../firebase"; // Import auth from your Firebase configuration
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import FontAwesomeIcon

import Nav from "./Nav";
import NavMobile from "./NavMobile";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "../context/LanguageContext"; // Import the useLanguage hook

const translations = {
  en: {
    welcome: "Welcome",
    signIn: "Sign In",
    signUp: "Sign Up",
  },
  vn: {
    welcome: "Chào mừng",
    signIn: "Đăng nhập",
    signUp: "Đăng ký",
  }
};

const Header = () => {
  const [header, setHeader] = useState(false);
  const [user, setUser] = useState(null); // State to hold user information
  const { language, changeLanguage } = useLanguage(); // Use the language context

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
      window.location.href = "/"; // Redirect to home page
    } catch (error) {
      console.error("Error signing out:", error); // Handle errors
    }
  };

  const currentPath = window.location.pathname; // Get the current path

  return (
    <header
      className={`${
        header
          ? "top-0 px-4"
          : "top-0 sm:top-4 lg:top-12 px-4 sm:px-16 xl:px-20 xxl:px-40"
      } fixed left-0 w-full h-16 lg:h-20 my-3 z-20 transition-all duration-300`}
    >
      <div className="bg-white px-2 lg:px-4 rounded-md shadow-primary flex items-center justify-between ">
        <div className="flex items-center xl:gap-[50px] gap-[20px]">
          {/* Logo */}
          <a href="/">
            <img
              src={logo}
              alt=""
              className="w-auto h-12 lg:h-20 py-1 lg:py-2"
            />
          </a>
          {/* nav */}
          <div className="hidden lg:flex">
            <Nav currentPath={currentPath} />
          </div>
        </div>
        <div className="flex items-center">
          {/* Language Switcher */}
          {/* <LanguageSwitcher /> Use the same LanguageSwitcher */}
          {/* buttons or user email */}
          <div className="flex gap-5">
            {user ? ( // Conditional rendering based on user state
              <>
                <Link
                  to="/user-profile"
                  className="text-heading font-medium text-sm lg:text-base"
                >
                  {translations[language].welcome}, {user.email.split("@")[0]} {/* Display user email */}
                </Link>
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
                  <Link to="/sign-in">{translations[language].signIn}</Link> {/* Use translation for Sign In */}
                </button>
                <button className="btn btn-md lg:px-[30px] bg-orange-100 border border-orange text-orange font-medium text-sm lg:text-base hover:bg-orange-200 hover:text-white transition">
                  <Link to="/sign-up">{translations[language].signUp}</Link> {/* Use translation for Sign Up */}
                </button>
              </>
            )}
          </div>
          {/* nav mobile */}
          <NavMobile />
        </div>
      </div>
    </header>
  );
};

export default Header;
