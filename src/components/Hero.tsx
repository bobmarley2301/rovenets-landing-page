import React, { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import AnimatedBackground from "./AnimatedBackground";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);
  const prefersReducedMotion = useReducedMotion();

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
    visible: { opacity: 1 },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const transition = {
    duration: isMobile ? 0.5 : 0.8,
    ease: "easeOut",
  };

  return (
    <section
      id="home"
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden"
    >
      {/* Анімований фон */}
      <AnimatedBackground />

      {/* Фонове зображення з оверлеєм */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-amber-900/40" />
      </div>

      {/* Контент */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          transition={{ duration: isMobile ? 0.5 : 1 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div
            variants={itemVariants}
            transition={{ ...transition, delay: isMobile ? 0.1 : 0.2 }}
            className="space-y-4 sm:space-y-6"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-playfair text-white leading-tight tracking-tight">
              <span className="block mb-2">Унікальні вироби</span>
              <span className="block text-amber-100">ручної роботи</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-amber-100/90 max-w-2xl mx-auto leading-relaxed font-light">
              Сумки та рюкзаки, створені з любов'ю до деталей
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            transition={{ ...transition, delay: isMobile ? 0.3 : 0.6 }}
            className="mt-8 sm:mt-12 flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 w-full sm:w-auto"
          >
            <motion.button
              whileHover={!isMobile ? { scale: 1.05 } : {}}
              whileTap={!isMobile ? { scale: 0.95 } : {}}
              onClick={() => scrollToSection("products")}
              className="w-full sm:w-auto bg-white text-amber-900 px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-3.5 rounded-full hover:bg-amber-100 transition-colors text-sm sm:text-base md:text-lg font-medium shadow-lg hover:shadow-xl"
            >
              Переглянути каталог
            </motion.button>
            <motion.button
              whileHover={!isMobile ? { scale: 1.05 } : {}}
              whileTap={!isMobile ? { scale: 0.95 } : {}}
              onClick={() => scrollToSection("contact")}
              className="w-full sm:w-auto border-2 border-white text-white px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-3.5 rounded-full hover:bg-white/10 transition-colors text-sm sm:text-base md:text-lg font-medium backdrop-blur-sm"
            >
              Зв'язатися з нами
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
