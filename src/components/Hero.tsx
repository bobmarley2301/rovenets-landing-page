import React, { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import AnimatedBackground from "./AnimatedBackground";
import HeroLanguageSwitcher from "./heroLanguageSwitcher";
import { useTranslation } from "gatsby-plugin-react-i18next"; // Правильний імпорт для Gatsby

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const { t } = useTranslation();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
    tap: {
      scale: 0.95,
      transition: { duration: 0.1 },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-20"
    >
      {/* Анімований фон */}
      <AnimatedBackground />

      {/* Фонове зображення з оверлеєм */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-amber-900/40" />
      </div>

      {/* Контент */}
      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
        <HeroLanguageSwitcher />
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center max-w-5xl mx-auto"
        >
          <motion.div
        variants={itemVariants}
        className="space-y-6 sm:space-y-8 md:space-y-10"
          >
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-playfair text-white leading-tight tracking-tight">
          <span className="block mb-3 sm:mb-4">{t("hero.title")}</span>
          <span className="block text-amber-100">{t("hero.subtitle")}</span>
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-amber-100/90 max-w-3xl mx-auto leading-relaxed font-light">
          {t("hero.description")}
        </p>
          </motion.div>

          <motion.div
        variants={itemVariants}
        className="mt-12 sm:mt-16 md:mt-20 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 w-full sm:w-auto"
          >
        <motion.button
          variants={buttonVariants}
          whileHover={!isMobile ? "hover" : undefined}
          whileTap={!isMobile ? "tap" : undefined}
          onClick={() => scrollToSection("products")}
          className="w-full sm:w-auto bg-white text-amber-900 px-8 sm:px-10 md:px-12 py-3 sm:py-4 md:py-5 rounded-full hover:bg-amber-100 transition-all text-base sm:text-lg md:text-xl font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          {t("hero.catalogButton")}
        </motion.button>
        <motion.button
          variants={buttonVariants}
          whileHover={!isMobile ? "hover" : undefined}
          whileTap={!isMobile ? "tap" : undefined}
          onClick={() => scrollToSection("contact")}
          className="w-full sm:w-auto border-2 border-white text-white px-8 sm:px-10 md:px-12 py-3 sm:py-4 md:py-5 rounded-full hover:bg-white/10 transition-all text-base sm:text-lg md:text-xl font-medium backdrop-blur-sm transform hover:-translate-y-1"
        >
          {t("hero.contactButton")}
        </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
