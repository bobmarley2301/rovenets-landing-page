import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Фонове зображення */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-bg.jpg"
          alt="Handmade bags and backpacks"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-amber-900/40" />
      </div>

      {/* Контент */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-playfair mb-6 text-white">
            Унікальні вироби ручної роботи
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-amber-100">
            Сумки та рюкзаки, створені з любов'ю до деталей
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => scrollToSection("products")}
              className="bg-white text-amber-900 px-8 py-3 rounded-full hover:bg-amber-100 transition-colors"
            >
              Переглянути каталог
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white/10 transition-colors"
            >
              Зв'язатися з нами
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
