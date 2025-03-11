import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    if (i18n && typeof i18n.changeLanguage === "function") {
      i18n.changeLanguage(lng); 
    } else {
      console.error("changeLanguage method is not available.");
    }
  };

  return (
    <div className="relative inline-block text-left">
      <select
        className="px-4 py-2 bg-amber-500 text-white rounded"
        onChange={(e) => changeLanguage(e.target.value)}
      >
        <option value="uk">Українська</option>
        <option value="en">English</option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;
