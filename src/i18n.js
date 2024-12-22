import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { fetchTranslations } from "./translations"; // Import the Firebase translation function

i18next
  .use(LanguageDetector) // Auto-detect language based on browser settings
  .use(initReactI18next) // Bind i18next to React
  .init({
    fallbackLng: "en-US", // Default language
    supportedLngs: ["en-US", "vi-VN"],
    detection: {
      order: ["querystring", "cookie", "localStorage", "navigator"], // Detect based on URL, cookies, etc.
      caches: ["localStorage", "cookie"],
    },
    resources: {}, // We'll dynamically load translations from Firebase
    interpolation: {
      escapeValue: false, // React already does escaping
    },
    react: {
      useSuspense: false, // Disable Suspense for loading translations
    },
  });

