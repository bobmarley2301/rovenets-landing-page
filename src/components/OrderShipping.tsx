import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "gatsby-plugin-react-i18next";

// Запасні дані, які будуть використовуватися при відсутності перекладів
const fallbackSteps = [
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

const fallbackShippingItems = [
  "Доставка по всій Україні - 2-3 дні",
  "Міжнародна доставка - 5-10 днів",
  "Відстеження замовлення",
  "Безпечна упаковка",
];

const fallbackProductionItems = [
  "Виготовлення виробу - 3-5 робочих днів",
  "Відправка замовлення - протягом 1-2 днів",
  "Можливість термінового виконання",
  "Регулярні оновлення статусу замовлення",
];

const OrderShipping = () => {
  const { t } = useTranslation();

  // Отримуємо переклади кроків з JSON-файлу з перевіркою
  const steps =
    (t("orderShipping.steps", { returnObjects: true }) as Array<{
      number: string;
      title: string;
      description: string;
    }>) || fallbackSteps;

  // Отримуємо переклади для доставки з перевіркою
  const shippingItems =
    (t("orderShipping.shipping.items", {
      returnObjects: true,
    }) as string[]) || fallbackShippingItems;

  // Отримуємо переклади для періоду виготовлення з перевіркою
  const productionItems =
    (t("orderShipping.production.items", {
      returnObjects: true,
    }) as string[]) || fallbackProductionItems;

  // Перевірка, чи є отримані дані масивами
  const validSteps = Array.isArray(steps) ? steps : fallbackSteps;
  const validShippingItems = Array.isArray(shippingItems)
    ? shippingItems
    : fallbackShippingItems;
  const validProductionItems = Array.isArray(productionItems)
    ? productionItems
    : fallbackProductionItems;

  console.log("Steps:", steps); // Додаємо логування для діагностики
  console.log("Shipping items:", shippingItems);
  console.log("Production items:", productionItems);

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
            {t("orderShipping.title", "Замовлення та доставка")}
          </h2>
          <p className="text-amber-800 text-lg">
            {t(
              "orderShipping.subtitle",
              "Простий процес замовлення та швидка доставка"
            )}
          </p>
        </motion.div>

        {/* Кроки замовлення */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {validSteps.map((step, index) => (
            <motion.div
              key={step.number || index}
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
              {t("orderShipping.shipping.title", "Доставка")}
            </h3>
            <ul className="space-y-3 text-amber-800 text-lg">
              {validShippingItems.map((item, index) => (
                <li key={index}>• {item}</li>
              ))}
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
              {t(
                "orderShipping.production.title",
                "Період виготовлення та відправки"
              )}
            </h3>
            <ul className="space-y-3 text-amber-800 text-lg">
              {validProductionItems.map((item, index) => (
                <li key={index}>• {item}</li>
              ))}
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
            {t("orderShipping.orderNow", "Замовити зараз")}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default OrderShipping;
