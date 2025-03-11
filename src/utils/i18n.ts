import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import languageEN from "../locales/en/translation.json";
import languageUA from "../locales/uk/translation.json";


i18n.use(initReactI18next).init({
  resources: {
    en: { translation: languageEN },
    uk: { translation: languageUA },
  },
  lng: "uk", 
  fallbackLng: "en", 
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
