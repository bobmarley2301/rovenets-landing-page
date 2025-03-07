import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const values = [
    {
      icon: "🌿",
      title: "Sustainability",
      description: "Екологічні матеріали та відповідальне виробництво",
    },
    {
      icon: "✋",
      title: "Handmade",
      description: "Кожен виріб зроблений вручну з любов'ю",
    },
    {
      icon: "🎁",
      title: "Custom Orders",
      description: "Індивідуальні замовлення для ваших унікальних потреб",
    },
  ];

  return (
    <section id="about" className="py-24 bg-amber-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 gap-16 items-center">
          {/* <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="/images/workshop.jpg"
              alt="About our handmade products"
              className="w-full rounded-lg shadow-lg"
            />
          </motion.div> */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-playfair mb-8 text-amber-900">
              Про нас
            </h2>
            <p className="text-amber-800 text-lg leading-relaxed">
              Ми створюємо унікальні вироби ручної роботи з любов'ю до деталей
              та увагою до якості. Кожна сумка та рюкзак - це результат творчого
              підходу та ретельного підбору матеріалів.
            </p>
            <p className="text-amber-800 text-lg leading-relaxed">
              Наша місія - створювати не просто аксесуари, а унікальні вироби,
              які стануть частиною вашої історії та виразом вашої
              індивідуальності.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-4">
              <div className="text-center p-6 bg-amber-100/50 rounded-xl">
                <div className="text-4xl font-bold text-amber-900 mb-3">5+</div>
                <div className="text-amber-800 font-medium">Років досвіду</div>
              </div>
              <div className="text-center p-6 bg-amber-100/50 rounded-xl">
                <div className="text-4xl font-bold text-amber-900 mb-3">
                  100+
                </div>
                <div className="text-amber-800 font-medium">
                  Задоволених клієнтів
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center p-8 bg-amber-100/50 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-5xl mb-6">{value.icon}</div>
              <h3 className="text-2xl font-semibold mb-4 text-amber-900">
                {value.title}
              </h3>
              <p className="text-amber-800 text-lg">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
