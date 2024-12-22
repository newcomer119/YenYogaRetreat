import { useNavigate } from "react-router-dom";
import { IoLanguageOutline } from "react-icons/io5";
import React, { useState, useEffect, useRef } from "react";
import i18next from "i18next";
import { loadTranslations } from "../i18n";

const LanguageSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false); // Dropdown state
  const dropdownRef = useRef(null); // Reference to the dropdown
  const navigate = useNavigate();

  // Languages
  const languages = [
    { code: "en-US", label: "English" },
    { code: "vi-VN", label: "Vietnamese" },
  ];

  // Handle language change
  const changeLanguage = async (code) => {
    setIsOpen(false); // Close dropdown after language change
    await i18next.changeLanguage(code); // Change the i18next language
    const path = window.location.pathname.split("/");
    path[1] = "?lang="+code;
    navigate(path.join("/"));
  };

  //Function to Close the dropdown if clicked outside

  return (
    <div className="relative">
      {/* Button with language icon */}
      <button
        className="p-2 rounded-[15px] text-heading text-lg hover:text-orange hover:bg-orange-100"
        onClick={() => setIsOpen(!isOpen)}
      >
        <IoLanguageOutline />
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div
          ref={dropdownRef} // Attach the ref to the dropdown
          className="absolute right-0 mt-1 p-1 z-21 bg-orange-100 border border-orange divide-y divide-orange divide-dotted text-heading shadow-lg rounded-lg"
        >
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => changeLanguage(language.code)}
              className="w-full text-left px-2 py-1.5 text-xs md:px-4 md:py-2 md:text-sm hover:text-orange"
            >
              {language.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;