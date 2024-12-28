import React from "react";
import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { IoLanguageOutline } from "react-icons/io5";

const LanguageSwitcher = () => {
  const { changeLanguage, language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    {
      en: { code: "en", label: "English" },
      vn: { code: "en", label: "Tiếng Anh" },
    },
    {
      en: { code: "vn", label: "Vietnamese" },
      vn: { code: "vn", label: "Tiếng Việt" },
    },
  ];

  return (
    <div className="relative ml-auto tab2:ml-0">
      {/* Button with language icon */}
      <button
        id="language"
        className="p-2 rounded-full text-2xl hover:bg-bg1 transition-all"
        onClick={() => setIsOpen(!isOpen)}
      >
        <IoLanguageOutline />
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute right-0 mt-1 p-1 z-21 bg-orange-100 border border-orange divide-y divide-orange divide-dotted text-heading shadow-lg rounded-lg w-28">
          {languages.map((lang) => (
            <button
              key={lang[language].code}
              onClick={() => {
                changeLanguage(lang[language].code);
                setIsOpen(false);
              }}
              className="w-full text-left px-2 py-1.5 text-xs tab:py-2 tab:text-sm hover:text-orange"
            >
              {lang[language].label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
