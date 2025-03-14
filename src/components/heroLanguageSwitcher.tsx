import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";

const HeroLanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (i18n.language === 'uk' && event.target.checked) {
      i18n.changeLanguage('en');
    } else if (i18n.language === 'en' && !event.target.checked) {
      i18n.changeLanguage('uk');
    }
  };

  return (
    <label className="relative inline-flex cursor-pointer items-center">
      <input
        type="checkbox"
        value=""
        checked={i18n.language === 'en'}
        onChange={handleLanguageChange}
        className="peer sr-only"
      />
      <div className="peer flex h-14 items-center gap-5 rounded-full bg-amber-500 px-6 after:absolute after:left-3 after:h-10 after:w-12 after:rounded-full after:bg-amber-300 after:transition-all after:content-[''] peer-checked:bg-amber-700 peer-checked:after:translate-x-full peer-focus:outline-none text-lg text-white">
        <span>UK</span>
        <span>EN</span>
      </div>
    </label>
  );
};

export default HeroLanguageSwitcher;