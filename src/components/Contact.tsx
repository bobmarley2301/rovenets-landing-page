import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "gatsby-plugin-react-i18next";
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

const Contact = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Тут буде логіка відправки форми
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section id="contact" className="py-20 bg-amber-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-playfair mb-6 text-amber-900">
            {t("contact.title", "Зв'яжіться з нами")}
          </h2>
          <p className="text-amber-800 text-lg">
            {t("contact.subtitle", "Маєте питання? Ми завжди на зв'язку")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Контактна інформація */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-lg shadow-lg border border-amber-100"
          >
            <h3 className="text-2xl font-semibold mb-6 text-amber-900">
              {t("contact.info.title", "Контактна інформація")}
            </h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <PhoneIcon className="h-6 w-6 text-amber-600 mt-1 mr-4" />
                <div>
                  <h4 className="font-semibold text-amber-900 mb-1">
                    {t("contact.info.phone.label", "Телефон")}
                  </h4>
                  <a
                    href={`tel:${t(
                      "contact.info.phone.value",
                      "+380991234567"
                    )}`}
                    className="text-amber-800 hover:text-amber-900"
                  >
                    {t("contact.info.phone.display", "+38 (099) 123-45-67")}
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <EnvelopeIcon className="h-6 w-6 text-amber-600 mt-1 mr-4" />
                <div>
                  <h4 className="font-semibold text-amber-900 mb-1">
                    {t("contact.info.email.label", "Email")}
                  </h4>
                  <a
                    href={`mailto:${t(
                      "contact.info.email.value",
                      "info@rovenets.com"
                    )}`}
                    className="text-amber-800 hover:text-amber-900"
                  >
                    {t("contact.info.email.display", "info@rovenets.com")}
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <MapPinIcon className="h-6 w-6 text-amber-600 mt-1 mr-4" />
                <div>
                  <h4 className="font-semibold text-amber-900 mb-1">
                    {t("contact.info.address.label", "Адреса")}
                  </h4>
                  <p className="text-amber-800">
                    {t(
                      "contact.info.address.value",
                      "м. Київ, вул. Прикладна, 1"
                    )}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Форма зворотного зв'язку */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-lg shadow-lg border border-amber-100"
          >
            <h3 className="text-2xl font-semibold mb-6 text-amber-900">
              {t("contact.form.title", "Напишіть нам")}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-amber-900 mb-1"
                >
                  {t("contact.form.name.label", "Ваше ім'я")}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder={t("contact.form.name.placeholder", "")}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-amber-900 mb-1"
                >
                  {t("contact.form.email.label", "Email")}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder={t("contact.form.email.placeholder", "")}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-amber-900 mb-1"
                >
                  {t("contact.form.message.label", "Повідомлення")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder={t("contact.form.message.placeholder", "")}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-amber-900 text-white px-6 py-3 rounded-lg hover:bg-amber-800 transition-colors"
              >
                {t("contact.form.submit", "Надіслати")}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
