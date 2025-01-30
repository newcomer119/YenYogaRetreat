// src/context/LanguageContext.js
import React, { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    // Get the initial language from localStorage or default to 'vn'
    return localStorage.getItem("language") || "vn";
  });

  const changeLanguage = (lang) => {
    setLanguage(lang); // Update the language state
    localStorage.setItem("language", lang); // Save the selected language to localStorage
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
