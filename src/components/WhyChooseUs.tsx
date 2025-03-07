import React from "react";
import { motion } from "framer-motion";

const advantages = [
  {
    icon: "🌿",
    title: "Екологічні матеріали",
    description:
      "Ми використовуємо тільки якісні, екологічно чисті матеріали для наших виробів",
  },
  {
    icon: "✋",
    title: "100% Handmade",
    description: "Кожен виріб створюється вручну з особливою увагою до деталей",
  },
  {
    icon: "🛫",
    title: "Доставка по всьому світу",
    description: "Швидка та надійна доставка в будь-яку точку світу",
  },
  {
    icon: "🎁",
    title: "Індивідуальні замовлення",
    description: "Створюємо унікальні вироби згідно з вашими побажаннями",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="py-24 bg-amber-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-playfair mb-6 text-amber-900">
            Чому обирають нас?
          </h2>
          <p className="text-amber-800 text-lg">
            Наші переваги, які роблять нас унікальними
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => (
            <motion.div
              key={advantage.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-amber-100/50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center"
            >
              <div className="text-5xl mb-6">{advantage.icon}</div>
              <h3 className="text-2xl font-semibold mb-4 text-amber-900">
                {advantage.title}
              </h3>
              <p className="text-amber-800 text-lg">{advantage.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a
            href="#contact"
            className="inline-block bg-amber-900 text-white px-8 py-3 rounded-full hover:bg-amber-800 transition-colors"
          >
            Зв'язатися з нами
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
