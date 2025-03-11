import React from "react";
import { changeLanguage } from "i18next";

const HeroLanguageSwitcher = () => {
  const handleLanguageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    changeLanguage(event.target.checked ? "en" : "uk");
  };

  return (
    <label className="relative inline-flex cursor-pointer items-center">
      <input type="checkbox" value="" onChange={handleLanguageChange} className="peer sr-only" />
      <div className="peer flex h-14 items-center gap-5 rounded-full bg-amber-500 px-6 after:absolute after:left-3 after:h-10 after:w-12 after:rounded-full after:bg-amber-300 after:transition-all after:content-[''] peer-checked:bg-amber-700 peer-checked:after:translate-x-full peer-focus:outline-none text-lg text-white">
        <span >UK</span>
        <span >EN</span>
      </div>
    </label>
  );
};

export default HeroLanguageSwitcher;
