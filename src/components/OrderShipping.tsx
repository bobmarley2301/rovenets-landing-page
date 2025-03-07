import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Оберіть модель",
    description:
      "Перегляньте наш каталог та виберіть модель, яка вам подобається",
  },
  {
    number: "02",
    title: "Напишіть нам",
    description: "Зв'яжіться з нами через WhatsApp або форму на сайті",
  },
  {
    number: "03",
    title: "Отримайте замовлення",
    description: "Ми доставимо ваше замовлення в будь-яку точку світу",
  },
];

const OrderShipping = () => {
  return (
    <section id="order-shipping" className="py-24 bg-amber-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-playfair mb-6 text-amber-900">
            Замовлення та доставка
          </h2>
          <p className="text-amber-800 text-lg">
            Простий процес замовлення та швидка доставка
          </p>
        </motion.div>

        {/* Кроки замовлення */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="text-6xl font-bold text-amber-200 absolute -top-8 -left-4">
                {step.number}
              </div>
              <div className="bg-amber-100/50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow relative z-10">
                <h3 className="text-2xl font-semibold mb-4 text-amber-900">
                  {step.title}
                </h3>
                <p className="text-amber-800 text-lg">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Інформація про доставку */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-amber-100/50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="text-2xl font-semibold mb-6 text-amber-900">
              Доставка
            </h3>
            <ul className="space-y-3 text-amber-800 text-lg">
              <li>• Доставка по всій Україні - 2-3 дні</li>
              <li>• Міжнародна доставка - 5-10 днів</li>
              <li>• Відстеження замовлення</li>
              <li>• Безпечна упаковка</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-amber-100/50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="text-2xl font-semibold mb-6 text-amber-900">
              Політика повернення
            </h3>
            <ul className="space-y-3 text-amber-800 text-lg">
              <li>• Повернення протягом 14 днів</li>
              <li>• Безкоштовна доставка при поверненні</li>
              <li>• Повний поворот коштів</li>
              <li>• Збереження оригінальної упаковки</li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="https://wa.me/YOUR_PHONE_NUMBER"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-amber-900 text-white px-8 py-3 rounded-full hover:bg-amber-800 transition-colors"
          >
            Замовити зараз
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default OrderShipping;
