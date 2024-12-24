// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        // translation: require('./locales/en/translation.json'),
        // hero: require('./locales/en/hero.json')
      },
      vn: {
        // translation: require('./locales/vn/translation.json'),
        // hero: require('./locales/vn/hero.json')
      },
    },
    lng: 'en', // Default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
