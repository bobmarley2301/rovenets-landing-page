import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "gatsby";
import { NAV_ITEMS, SCROLL_OFFSET } from "../constants/routes";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { SectionId } from "../types";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "gatsby-plugin-react-i18next";

const Navbar = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<SectionId>("home");
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToSection = (sectionId: SectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - SCROLL_OFFSET;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_ITEMS.map((item) => item.id);
      const currentScrollY = window.scrollY;

      if (currentScrollY > 100) {
        if (currentScrollY > lastScrollY) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      } else {
        setIsVisible(false);
      }
      setLastScrollY(currentScrollY);

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();

          if (top <= SCROLL_OFFSET && bottom > SCROLL_OFFSET) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Функція для отримання перекладу для навігаційних елементів
  const getTranslatedName = (itemId: SectionId) => {
    return t(`navigation.${itemId}`, getDefaultName(itemId));
  };

  // Функція для отримання запасного імені, якщо переклад відсутній
  const getDefaultName = (itemId: SectionId): string => {
    // Використовуйте типово безпечний запис з явним переліком всіх можливих значень SectionId
    switch (itemId) {
      case "home":
        return "Головна";
      case "about":
        return "Про нас";
      case "products":
        return "Продукція";
      case "why-us": // Змінено з "why-us" на "whyChooseUs"
        return "Чому ми";
      case "order-shipping":
        return "Замовлення";
      case "contact":
        return "Контакти";
      case "reviews":
        return "Відгуки";
      default:
        return itemId;
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3 }}
      className="fixed w-full z-50 bg-white/90 backdrop-blur-sm border-b border-amber-100"
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="text-2xl font-playfair text-amber-900">
            Rovenets
          </Link>

          <div className="hidden md:flex space-x-8">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-lg transition-colors ${
                  activeSection === item.id
                    ? "text-amber-900 font-medium"
                    : "text-amber-700 hover:text-amber-900"
                }`}
              >
                {getTranslatedName(item.id)}
              </button>
            ))}
            <LanguageSwitcher />
          </div>

          <button
            onClick={toggleMenu}
            className="md:hidden text-amber-900"
            aria-label={
              isOpen
                ? t("navigation.close", "Закрити меню").toString()
                : t("navigation.open", "Відкрити меню").toString()
            }
          >
            {isOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-amber-100"
            >
              <div className="py-4 space-y-4">
                {NAV_ITEMS.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      scrollToSection(item.id);
                      setIsOpen(false);
                    }}
                    className={`block w-full text-left px-4 py-2 text-lg transition-colors ${
                      activeSection === item.id
                        ? "text-amber-900 font-medium"
                        : "text-amber-700 hover:text-amber-900"
                    }`}
                  >
                    {getTranslatedName(item.id)}
                  </button>
                ))}
                <div className="px-4">
                  <LanguageSwitcher />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
