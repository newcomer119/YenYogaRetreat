import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { auth } from "../firebase"; // Import auth from your Firebase configuration
import Nav from "./Nav";
import NavMobile from "./NavMobile";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "../context/LanguageContext"; // Import the useLanguage hook
import { buttons, images } from "../data";
import { FaUser  } from "react-icons/fa6";

const Header = () => {
  const [header, setHeader] = useState(false);
  const [user, setUser] = useState(null); // State to hold user information
  const [isOpen, setIsOpen] = useState(false);
  const { language } = useLanguage(); // Use the language context
  const { pathname } = useLocation(); // Get the current path

  useEffect(() => {
    // Scroll event listener
    const handleScroll = () => {
      setHeader(window.scrollY > 24);
    };

    window.addEventListener("scroll", handleScroll);

    // Monitor authentication state
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user); // Update user state
    });

    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup scroll listener
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

  const getHeaderClass = () => {
    if (pathname === "/") {
      return header ? "navSolid" : "navTransparent";
    } else {
      return "navSolid";
    }
  };

  return (
    <header
      className={`${
        getHeaderClass()
      } fixed left-0 w-full h-16 tab:h-20 my-3 z-20 transition-all duration-300`}
    >
      <div className=" px-2 rounded-md flex items-center">
        {/* Logo */}
        <a href="/">
          <img
            src={images.logo}
            alt="logo"
            className="w-auto min-w-8 h-12 tab:h-16 lap:h-20 py-2 "
          />
        </a>

        {/* nav */}
        <Nav currentPath={pathname} />
        <div id="navRight" className="relative ml-auto tab2:ml-0 flex items-center">
          <LanguageSwitcher />
          {user ? (
            <>
              <div
                className=" ml-2 tab2:mr-2 p-2 tab2:p-3 rounded-full border border-headings1 text-headings1 hover:bg-headings1 hover:text-white font-medium text-sm"
                onClick={() => setIsOpen(!isOpen)}
              >
                <FaUser  />
                {isOpen && (
                  <div className="absolute right-6 mt-5 z-21 bg-white border border-gray divide-y divide-gray text-heading w-24">
                    <button
                      onClick={() => {
                        handleLogout();
                        setIsOpen(false);
                      }}
                      className="w-full text-left px-2 py-1.5 text-heading"
                    >
                      <Link to={"/user-profile"}>
                        {buttons[language].profile}
                      </Link>
                    </button>
                    <button
                      onClick={() => {
                        handleLogout();
                        setIsOpen(false);
                      }}
                      className="w-full text-left px-2 py-1.5 text-red-100"
                    >
                      {buttons[language].logout}
                    </button>
                  </div>
                )}
                {/* Welcome, {user.email.split("@")[0]} Display user email */}
              </div>
            </>
          ) : (
            <>
              <button
                id="signin"
                className="ml-1 tab2:ml-3 font-bold text-xs tab:text-sm lap:text-base transition-all hover:scale-[1.05]"
              >
                <Link to="/sign-in">{buttons[language].signIn}</Link>
              </button>
              <button
                id="signup"
                className="ml-3 tab2:ml-4 px-2 py-2 mob1:px-3 tab:px-4 lap:px-5 rounded-md bg-primary border border-primary text-white font-medium text-xs tab:text-sm lap:text-base hover:bg-accent1 hover:text-body transition-all"
              >
                <Link to="/sign-up">{buttons[language].signUp}</Link>
              </button>
            </>
          )}
          <NavMobile />
        </div>
      </div>
    </header>
  );
};

export default Header;